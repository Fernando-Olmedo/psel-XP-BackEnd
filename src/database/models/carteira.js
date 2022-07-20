const createCarteira = (sequelize, DataTypes) => {
  const Carteira = sequelize.define("Carteira", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    qtdeAtivo: DataTypes.INTEGER,
  },
  {
    tableName: 'Carteiras',
    underscored: true,
  });

  Carteira.associate = (models) => {
    Carteira.belongsTo(models.Cliente, { 
      as: 'cliente' ,
      through: Carteira,
      foreignKey: 'codCliente',
      otherKey: 'codCliente',
    });
    Carteira.belongsTo(models.Ativo, { 
      as: 'ativo' ,
      through: Carteira,
      foreignKey: 'codAtivo',
      otherKey: 'codAtivo',
    });
  };

  return Carteira;
};

module.exports = createCarteira;