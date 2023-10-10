const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ciudades', {
    idCiudad: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idEstado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estados',
        key: 'idEstado'
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
    tableName: 'ciudades',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCiudad" },
        ]
      },
      {
        name: "fk_ciudad_estado1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstado" },
        ]
      },
    ]
  });
};
