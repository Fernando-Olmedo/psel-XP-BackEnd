const createCliente = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente", {
      codCliente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: DataTypes.STRING,
      nome: DataTypes.STRING,
      password: DataTypes.STRING,
      hash: DataTypes.STRING
    },
    {
      tableName: 'Clientes',
      underscored: true,
    });
  
    Cliente.associate = (models) => {
      Cliente.hasOne(models.Conta,
        { foreignKey: 'codCliente', as: 'conta' });
      Cliente.hasMany(models.Ordem,
        { foreignKey: 'codCliente', as: 'ordem' });
      };
  
    return Cliente;
  };
  
  module.exports = createCliente;