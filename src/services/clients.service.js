const Sequelize = require('sequelize');
const { Carteira, Ativo } = require('../database/models');

const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const getWallet = async (codCliente) => {
    const allAssets = await Carteira.findAll({ 
        where: { codCliente },
        attributes: [
            'codCliente',
            'codAtivo',
            'qtdeAtivo',
            [sequelize.col('ativo.valor_atual_ativo'), 'valor'],
        ], 
        include: { model: Ativo, as: 'ativo', attributes: [] },
    });
    return allAssets;
};

module.exports = { getWallet };