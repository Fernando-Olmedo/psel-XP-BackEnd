const { Ativo } = require('../models');

module.exports = async (req, res, next) => {
    const { qtdeAtivo, codAtivo } = req.body;

    const ativoCorretora = await Ativo.findOne({ attributes: ['qtdeAtivo'],
    where: { codAtivo } });
    
    if (qtdeAtivo > ativoCorretora.qtdeAtivo) {
       return res.status(400).json({ message: 'quantity requested not available' });
    }
    next();
};
