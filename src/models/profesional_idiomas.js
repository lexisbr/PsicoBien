const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profesional_idiomas', {
    idProfesionalIdiomas:{
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    idIdioma: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'idiomas',
        key: 'idIdiomas'
      }
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fechaCreacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fechaActualizacion: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
    tableName: 'profesional_idiomas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProfesionalIdiomas" },
        ]
      },
      {
        name: "fk_profesional_idiomas_idiomas1_idx",
        using: "BTREE",
        fields: [
          { name: "idIdioma" },
        ]
      },
      {
        name: "fk_profesional_idiomas_profesionales1_idx",
        using: "BTREE",
        fields: [
          { name: "colegiadoProfesional" },
        ]
      },
    ]
  });
};
