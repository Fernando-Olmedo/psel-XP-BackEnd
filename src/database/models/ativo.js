const createAtivo = (sequelize, DataTypes) => {
  const Ativo = sequelize.define("Ativo", {
    codAtivo: { type: DataTypes.STRING, primaryKey: true, autoIncrement: false },
    nome: DataTypes.STRING,
    qtdeAtivo: DataTypes.INTEGER,
    valorAtualAtivo: DataTypes.DECIMAL(10,2),
  },
  {
    tableName: 'Ativos',
    underscored: true,
  });

  Ativo.associate = (models) => {
    Ativo.hasMany(models.Carteira,
      { foreignKey: 'codAtivo', as: 'carteira' });
    Ativo.hasMany(models.Ordem,
      { foreignKey: 'codAtivo', as: 'ordem' });
    };

  return Ativo;
};

module.exports = createAtivo;