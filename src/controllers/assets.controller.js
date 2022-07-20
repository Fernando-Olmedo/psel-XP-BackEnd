const assetsService = require('../services/assets.service');

const findAsset = async (req, res) => {
    const { codAtivo } = req.params;
    const ExchangeAssets = await assetsService.getAsset(codAtivo);
    return res.status(201).json(ExchangeAssets);
};

module.exports = {
    findAsset,
};