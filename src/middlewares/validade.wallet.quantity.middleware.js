const { Carteira } = require('../database/models');

module.exports = async (req, res, next) => {
    const { qtdeAtivo, codAtivo, codCliente } = req.body;

    const ativoCarteira = await Carteira.findOne({ attributes: ['codAtivo', 'qtdeAtivo'],
    where: { codAtivo, codCliente } });

    if (!ativoCarteira) {
        const msg = 'quantity requested not available. Asset not in wallet';
        return res.status(400).json({ message: msg });
     }
    
    if (qtdeAtivo > ativoCarteira.qtdeAtivo) {
       const msg = `quantity requested not available. Max allowed is ${ativoCarteira.qtdeAtivo}`;
       return res.status(400).json({ message: msg });
    }
    next();
};