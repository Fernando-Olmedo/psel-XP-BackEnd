const Sequelize = require('sequelize');
const { Carteira, Ativo } = require('../database/models');

const config = require('../database/config/config');

const sequelize = new Sequelize(config.production);

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

const getAssets = async (codCliente) => {
    const allAssets = await Ativo.findAll({ attributes: ['codAtivo', 'valorAtualAtivo', 'sigla'] });
    const wallet = await Carteira.findAll({ where: { codCliente } });
    
    const result = allAssets.map((asset) => { 
      const assetInWallet = wallet.find((w) => w.codAtivo === asset.codAtivo);

      const newAsset = {
        codAtivo: asset.codAtivo,
        sigla: asset.sigla,
        valor: asset.valorAtualAtivo,
        estaNaCarteira: 'sim',
      };

      if (assetInWallet) newAsset.qtdeAtivo = assetInWallet.qtdeAtivo;
      else {
        newAsset.qtdeAtivo = 0;
        newAsset.estaNaCarteira = 'não';
      }
        
        return newAsset;
    });

    return result;
};

module.exports = { getWallet, getAssets };