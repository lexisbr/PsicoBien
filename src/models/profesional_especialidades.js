const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profesional_especialidades', {
    idProfesionalEspecialidad: {
      autoIncrement: true,
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
    especialidad: {
      type: DataTypes.STRING(90),
      allowNull: false
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
          { name: "idProfesionalEspecialidad" },
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
