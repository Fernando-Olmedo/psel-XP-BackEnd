const Sequelize = require('sequelize');
const { Carteira, Ativo } = require('../database/models');

const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const getWallet = async (codCliente) => {
    console.log(codCliente);
    const allAssets = await Carteira.findAll({ 
        where: { codCliente },
        attributes: [
            'codCliente',
            'codAtivo',
            'qtdeAtivo',
            [sequelize.col('ativo.valor_atual_ativo'), 'valorAtivo'],
        ], 
        include: { model: Ativo, as: 'ativo', attributes: [] },
    });
    console.log(allAssets);
    return allAssets;
};

module.exports = { getWallet };