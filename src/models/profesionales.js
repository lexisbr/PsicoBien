const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profesionales', {
    colegiado: {
      type: DataTypes.STRING(180),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(360),
      allowNull: true
    },
    precioPorHora: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    fotoTitulo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'profesionales',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "colegiado" },
        ]
      },
      {
        name: "colegiado_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "colegiado" },
        ]
      },
    ]
  });
};
