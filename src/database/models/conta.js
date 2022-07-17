const createConta = (sequelize, DataTypes) => {
  const Conta = sequelize.define("Conta", {
    codCliente: DataTypes.INTEGER,
    saldo: DataTypes.DECIMAL,
  },
  {
    tableName: 'Contas',
    underscored: true,
  });

  Conta.associate = (models) => {
    Conta.belongsTo(models.Cliente,
      { foreignKey: 'codCliente', as: 'cliente' });
    };

  return Conta;
};

module.exports = createConta;