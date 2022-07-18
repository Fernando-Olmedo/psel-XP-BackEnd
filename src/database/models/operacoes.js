const createOperacao = (sequelize, DataTypes) => {
  const Operacao = sequelize.define("Operacao", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tipo: DataTypes.STRING,
  },
  {
    tableName: 'Operacoes',
    underscored: true,
  });

  Operacao.associate = (models) => {
    Operacao.belongsTo(models.Ordem,
      { foreignKey: 'tipo', as: 'ordens' });
    };

  return Operacao;
};

module.exports = createOperacao;