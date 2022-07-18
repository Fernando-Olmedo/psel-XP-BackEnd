const createAtivo = (sequelize, DataTypes) => {
  const Ativo = sequelize.define("Ativo", {
    codAtivo: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: false },
    cotacao: DataTypes.DECIMAL,
    nome: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
  },
  {
    tableName: 'Ativos',
    underscored: true,
  });

  Ativo.associate = (models) => {
    Ativo.hasMany(models.Carteiras,
      { foreignKey: 'codAtivo', as: 'carteira' });
    Ativo.hasMany(models.Ordens,
      { foreignKey: 'codAtivo', as: 'ordem' });
    };

  return Ativo;
};