const { Carteira } = require('../database/models');

module.exports = async (req, res, next) => {
    const { qtdeAtivo, codAtivo } = req.body;

    const ativoCarteira = await Carteira.findOne({ attributes: ['qtdeAtivo'],
    where: { codAtivo } });
    
    if (qtdeAtivo > ativoCarteira.qtdeAtivo) {
       const msg = `quantity requested not available. Max allowed is ${ativoCarteira.qtdeAtivo}`;
       return res.status(400).json({ message: msg });
    }
    next();
};