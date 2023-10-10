const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estados', {
    idEstado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idPais: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'paises',
        key: 'idPais'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fechaActualizacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
      {
        name: "fk_estado_pais_idx",
        using: "BTREE",
        fields: [
          { name: "idPais" },
        ]
      },
    ]
  });
};
