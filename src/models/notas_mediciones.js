const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notas_mediciones', {
    idNota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'notas',
        key: 'idNota'
      }
    },
    idMedicion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mediciones',
        key: 'idMedicion'
      }
    },
    idOpcionSeleccionada: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'opciones_mediciones',
        key: 'idOpcionesMediciones'
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
    tableName: 'notas_mediciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idNota" },
          { name: "idMedicion" },
        ]
      },
      {
        name: "fk_notas_mediciones_mediciones1_idx",
        using: "BTREE",
        fields: [
          { name: "idMedicion" },
        ]
      },
      {
        name: "fk_notas_mediciones_opciones_mediciones1_idx",
        using: "BTREE",
        fields: [
          { name: "idOpcionSeleccionada" },
        ]
      },
    ]
  });
};
