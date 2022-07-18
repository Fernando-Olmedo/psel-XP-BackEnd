const investmentsServices = require('../services/investments.service');

const buyOrder = async (req, res) => {
    const order = await investmentsServices.createOrder(req.body);
    return res.status(201).json(order);
};

const findAll = async (req, res) => {
    const orders = await investmentsServices.findOrder();
    return res.status(201).json(orders);
};

module.exports = {
    buyOrder,
    findAll,
};