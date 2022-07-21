const depAndWithService = require('../services/depAndWith.service');

const deposit = async (req, res) => {
    req.body = { ...req.body, tipo: 'deposit' };
    const saldo = await depAndWithService.createMov(req.body);
    return res.status(201).json(saldo);
};

module.exports = {
    deposit,
};