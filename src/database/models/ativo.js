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
    Ativo.hasMany(models.Carteiras,
      { foreignKey: 'codAtivo', as: 'carteira' });
    Ativo.hasMany(models.Ordens,
      { foreignKey: 'codAtivo', as: 'ordem' });
    };

  return Ativo;
};