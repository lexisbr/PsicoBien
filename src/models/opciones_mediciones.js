const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('opciones_mediciones', {
    idOpcionesMediciones: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idMedicion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mediciones',
        key: 'idMedicion'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    fechaCreacion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaActualizacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'opciones_mediciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idOpcionesMediciones" },
        ]
      },
      {
        name: "fk_opciones_mediciones_mediciones1_idx",
        using: "BTREE",
        fields: [
          { name: "idMedicion" },
        ]
      },
    ]
  });
};
