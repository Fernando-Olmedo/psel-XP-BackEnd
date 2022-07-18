const createCarteira = (sequelize, DataTypes) => {
  const Carteira = sequelize.define("Carteira", {
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
      foreignKey: 'codAtivo',
      otherKey: 'codCliente',
    });
    Carteira.belongsTo(models.Ativo, { 
      as: 'ativo' ,
      through: Carteira,
      foreignKey: 'codCliente',
      otherKey: 'codAtivo',
    });
  };

  return Carteira;
};