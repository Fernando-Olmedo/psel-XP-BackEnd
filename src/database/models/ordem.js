const createOrdem = (sequelize, DataTypes) => {
  const Ordem = sequelize.define("Ordem", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    codAtivo: DataTypes.INTEGER,
    codCliente: DataTypes.INTEGER,
    dataTransacao: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    qtdeAtivo: DataTypes.INTEGER,
    tipo: DataTypes.INTEGER,
    valorAtivo: DataTypes.DECIMAL(10,2),
  },
  {
    tableName: 'Ordens',
    underscored: true,
  });

  Ordem.associate = (models) => {
    Ordem.belongsTo(models.Cliente,
      { foreignKey: 'codCliente', as: 'cliente' });
    Ordem.belongsTo(models.Ativo,
      { foreignKey: 'codAtivo', as: 'ativo' });
    };

  return Ordem;
};

module.exports = createOrdem;