const { Ativo, Carteira, Conta } = require('../database/models');

const qtdeAtivo = async (ordem) => {
    const ativo = await Ativo.findByPk(ordem.codAtivo);
    
    let qtdeAtualAtivo;
   
    if (ordem.tipo === 1) {
      qtdeAtualAtivo = ativo.qtdeAtivo - ordem.qtdeAtivo; // Na compra, reduz a quantidade disponivel a corretora
    } else qtdeAtualAtivo = ativo.qtdeAtivo + ordem.qtdeAtivo; // Na venda, aumenta a quantidade disponivel a corretora
    
    return { qtdeAtivo: qtdeAtualAtivo };
};

const qtdeAtivoCart = async (ordem) => {
    const ativoCart = await Carteira.findOne({ attributes: ['codCliente', 'codAtivo', 'qtdeAtivo'],
    where: { codCliente: ordem.codCliente, codAtivo: ordem.codAtivo } });
    
    let qtdeAtualCart;
    
    if (ordem.tipo === 1) {
    qtdeAtualCart = ativoCart.qtdeAtivo + ordem.qtdeAtivo; // Na compra, aumenta a quantidade do ativo na carteira
    } else qtdeAtualCart = ativoCart.qtdeAtivo - ordem.qtdeAtivo; // Na venda, diminui a quantidade do ativo na carteira
    return { qtdeAtivo: qtdeAtualCart };
};

const procuraAtivoCart = async (ordem) => {
    const ativoCart = await Carteira.findOne({ attributes: ['codCliente', 'codAtivo'],
    where: { codCliente: ordem.codCliente, codAtivo: ordem.codAtivo } });
    
    if (ativoCart) return true;
    
    return false;
};

const atualizaSaldo = async (ordem) => {
    const contaCliente = await Conta.findOne({ attributes: ['saldo'],
    where: { codCliente: ordem.codCliente } });
    
    const ativoCorretora = await Ativo.findOne({ attributes: ['valorAtualAtivo'],
    where: { codAtivo: ordem.codAtivo } });
    
    let novoSaldo;
    
    if (ordem.tipo === 1) {
      novoSaldo = contaCliente.saldo - (ordem.qtdeAtivo * ativoCorretora.valorAtualAtivo); // Na compra, utiliza o dinheiro na conta do cliente
    } else { 
        const saldoConta = parseFloat(contaCliente.saldo);
        const saldoVenda = parseFloat(ordem.qtdeAtivo * ativoCorretora.valorAtualAtivo);
        novoSaldo = saldoConta + saldoVenda; // Na venda, "deposita" o dinheiro na conta do cliente
    }

    return { saldo: novoSaldo };
};

const atualizaConta = async (movimentacao) => {
    const conta = await Conta.findOne({ 
        attributes: ['codCliente', 'saldo'],
        where: { codCliente: movimentacao.codCliente } });
    console.log('helpers', conta);
    let novoSaldo;
    const saldoAtual = parseFloat(conta.saldo);
    const saldoMov = parseFloat(movimentacao.valor);

    console.log('helpers saldo atual', saldoAtual);
    console.log('helpers saldo mov', saldoMov);

    if (movimentacao.tipo === 'deposit') novoSaldo = saldoAtual + saldoMov;
    else novoSaldo = saldoAtual - saldoMov;  

    console.log('helpers novo saldo', novoSaldo);
    
    return { saldo: novoSaldo };
};

module.exports = { qtdeAtivo, qtdeAtivoCart, procuraAtivoCart, atualizaSaldo, atualizaConta };