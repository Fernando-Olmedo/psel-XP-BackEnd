const investmentsModels = require('../models/');

const buyOrder = async (order) => {
    const buyOrder = await investmentsModels.executeBuyOrder(order);
    return buyOrder;
};

module.exports = buyOrder;