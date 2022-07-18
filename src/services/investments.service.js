const { Ordem } = require('../database/models');

const createOrder = async (order) => {
    const createdOrder = await Ordem.create(order);
    return createdOrder;
};

const findOrder = async () => {
    const allOrders = await Ordem.findAll();
    return allOrders;
};

module.exports = { createOrder, findOrder };