const { Ativo } = require('../database/models');

module.exports = async (req, res, next) => {
    const { qtdeAtivo, codAtivo } = req.body;

    const ativoCorretora = await Ativo.findOne({ attributes: ['qtdeAtivo'],
    where: { codAtivo } });
    
    if (qtdeAtivo > ativoCorretora.qtdeAtivo) {
      const msg = `quantity requested not available. Max allowed is ${ativoCorretora.qtdeAtivo}`;
      return res.status(400).json({ message: msg });
    }
    next();
};
