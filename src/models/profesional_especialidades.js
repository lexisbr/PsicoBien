const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profesional_especialidades', {
    colegiadoProfesional: {
      type: DataTypes.STRING(180),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'profesionales',
        key: 'colegiado'
      }
    },
    idEspecialidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'especialidades',
        key: 'idEspecialidad'
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
    tableName: 'profesional_especialidades',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "colegiadoProfesional" },
          { name: "idEspecialidad" },
        ]
      },
      {
        name: "fk_profesional_especialidades_especialidades1_idx",
        using: "BTREE",
        fields: [
          { name: "idEspecialidad" },
        ]
      },
      {
        name: "fk_profesional_especialidades_profesionales1_idx",
        using: "BTREE",
        fields: [
          { name: "colegiadoProfesional" },
        ]
      },
    ]
  });
};
