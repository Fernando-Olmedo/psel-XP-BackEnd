const depAndWithService = require('../services/depAndWith.service');

const deposit = async (req, res) => {
    req.body = { ...req.body, tipo: 'deposit' };
    const saldo = await depAndWithService.createMov(req.body);
    return res.status(201).json(saldo);
};

const withdrawal = async (req, res) => {
    req.body = { ...req.body, tipo: 'withdrawal' };
    const saldo = await depAndWithService.createMov(req.body);
    return res.status(201).json(saldo);
};

const balance = async (req, res) => {
    const { codCliente } = req.params;
    const saldo = await depAndWithService.getBalance(codCliente);
    return res.status(200).json(saldo);
};

module.exports = {
    deposit,
    withdrawal,
    balance,
};