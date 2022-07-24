const Sequelize = require('sequelize');
const { Ativo } = require('../database/models');

const config = require('../database/config/config');

const env = process.env.envVar;

const sequelize = new Sequelize(config[env], config);

const getAsset = async (codAtivo) => {
    const asset = await Ativo.findByPk(codAtivo, { attributes: [
        'codAtivo',
        'qtdeAtivo',
        [sequelize.col('valor_atual_ativo'), 'valor'],
    ] });

    if (!asset) {
        const errorObject = { status: 404, message: 'Asset not found' };
        throw errorObject;
    }

    return asset;
};

module.exports = { getAsset };