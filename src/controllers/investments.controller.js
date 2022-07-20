const investmentsServices = require('../services/investments.service');

const buyOrder = async (req, res) => {
    req.body = { ...req.body, tipo: 1 };
    const order = await investmentsServices.createOrdem(req.body);
    return res.status(201).json(order);
};

const sellOrder = async (req, res) => {
    req.body = { ...req.body, tipo: 2 };
    const order = await investmentsServices.createOrdem(req.body);
    return res.status(201).json(order);
};

const findAll = async (req, res) => {
    const orders = await investmentsServices.findOrder();
    return res.status(201).json(orders);
};

module.exports = {
    buyOrder,
    sellOrder,
    findAll,
};