const { Ativo, Carteira, Conta } = require('../database/models');

const qtdeAtivo = async (ordem) => {
    const ativo = await Ativo.findByPk(ordem.codAtivo);
    const qtdeAtualAtivo = ativo.qtdeAtivo - ordem.qtdeAtivo;
    const qtdeObjtAtivo = { qtdeAtivo: qtdeAtualAtivo };
    return qtdeObjtAtivo;
};

const qtdeAtivoCart = async (ordem) => {
    const ativoCart = await Carteira.findOne({ attributes: ['codCliente', 'codAtivo', 'qtdeAtivo'],
    where: { codCliente: ordem.codCliente, codAtivo: ordem.codAtivo } });
    const qtdeAtualCart = ativoCart.qtdeAtivo + ordem.qtdeAtivo;
    const qtdeObjtCart = { qtdeAtivo: qtdeAtualCart };
    return qtdeObjtCart;
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
    const novoSaldo = contaCliente.saldo - (ordem.qtdeAtivo * ativoCorretora.valorAtualAtivo);
    return { saldo: novoSaldo };
};

module.exports = { qtdeAtivo, qtdeAtivoCart, procuraAtivoCart, atualizaSaldo };