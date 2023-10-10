const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historiales_clinicos', {
    idHistorialClinico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    },
    pacienteDni: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'dni'
      }
    },
    colegiadoProfesional: {
      type: DataTypes.STRING(180),
      allowNull: false,
      references: {
        model: 'profesionales',
        key: 'colegiado'
      }
    }
  }, {
    sequelize,
    tableName: 'historiales_clinicos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idHistorialClinico" },
        ]
      },
      {
        name: "fk_historial_clinico_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "pacienteDni" },
        ]
      },
      {
        name: "fk_historial_clinico_profesionales1_idx",
        using: "BTREE",
        fields: [
          { name: "colegiadoProfesional" },
        ]
      },
    ]
  });
};
