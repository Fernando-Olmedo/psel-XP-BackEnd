const createConta = (sequelize, DataTypes) => {
  const Conta = sequelize.define("Conta", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    codCliente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: false },
    saldo: DataTypes.DECIMAL(10,2),
  },
  {
    tableName: 'Contas',
    underscored: true,
  });

  Conta.associate = (models) => {
    Conta.belongsTo(models.Cliente,
      { foreignKey: 'codCliente', as: 'clientes' });
    };

  return Conta;
};

module.exports = createConta;