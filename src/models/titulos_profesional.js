const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('titulos_profesional', {
    idTituloProfesional: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    institucion: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    fechaAdquisicion: {
      type: DataTypes.DATEONLY,
      allowNull: false
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
    tableName: 'titulos_profesional',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idTituloProfesional" },
        ]
      },
      {
        name: "fk_titulo_profesional_profesionales1_idx",
        using: "BTREE",
        fields: [
          { name: "colegiadoProfesional" },
        ]
      },
    ]
  });
};
