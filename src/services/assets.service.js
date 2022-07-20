const Sequelize = require('sequelize');
const { Ativo } = require('../database/models');

const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const getAsset = async (codAtivo) => {
    const asset = await Ativo.findByPk(codAtivo, { attributes: [
        'codAtivo',
        'qtdeAtivo',
        [sequelize.col('valor_atual_ativo'), 'valor'],
    ] });
    return asset;
};

module.exports = { getAsset };