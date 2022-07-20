const [carteira, created] = await Carteira.findOrCreate({
    attributes: ['codCliente', 'codAtivo'],
    where: { codCliente: order.codCliente, codAtivo: order.codAtivo },
    defaults: { qtdeAtivo: order.qtdeAtivo },
    transaction: t });
// Quando o ativo não é encontrado, INSERT sempre seleciona id
// model nao suporta chave composta
// nao e possivel definir attributes no INSERT