const { Conta } = require('../database/models');

module.exports = async (req, res, next) => {
    const { codCliente, valor } = req.body;

    const accountBalance = await Conta.findOne({ attributes: ['saldo'],
    where: { codCliente } });
    
    if (valor > accountBalance.saldo) {
      const msg = `quantity requested not available. Max allowed is ${accountBalance.saldo}`;
      return res.status(400).json({ message: msg });
    }
    next();
};