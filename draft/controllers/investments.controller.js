const investmentsServices = require('../services/investments.service.ts');

const buyOrder = async (req, res) => {
    const order = await investmentsServices.buyOrder(req.body);
    return res.status(201).json(order);
};

module.exports = {
    buyOrder,
};