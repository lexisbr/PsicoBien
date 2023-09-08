const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notas', {
    idNota: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    idHistorialClinico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'historial_clinico',
        key: 'idHistorialClinico'
      }
    },
    idEvento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'evento',
        key: 'idEvento'
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
    tableName: 'notas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idNota" },
        ]
      },
      {
        name: "fk_notas_historial_clinico1_idx",
        using: "BTREE",
        fields: [
          { name: "idHistorialClinico" },
        ]
      },
      {
        name: "fk_notas_eventos1_idx",
        using: "BTREE",
        fields: [
          { name: "idEvento" },
        ]
      },
    ]
  });
};
