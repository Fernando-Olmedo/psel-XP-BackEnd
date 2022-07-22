const clientsService = require('../services/clients.service');

const findAllAssets = async (req, res) => {
    const { codCliente } = req.params;
    const walletAssets = await clientsService.getWallet(codCliente);
    return res.status(200).json(walletAssets);
};

module.exports = {
    findAllAssets,
};