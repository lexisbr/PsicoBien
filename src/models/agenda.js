const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agenda', {
    idAgenda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    colegiadoProfesional: {
      type: DataTypes.STRING(180),
      allowNull: false,
      references: {
        model: 'profesionales',
        key: 'colegiado'
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
    tableName: 'agenda',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAgenda" },
        ]
      },
      {
        name: "fk_agenda_profesionales1_idx",
        using: "BTREE",
        fields: [
          { name: "colegiadoProfesional" },
        ]
      },
    ]
  });
};
