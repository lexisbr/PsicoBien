const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clinicas', {
    idClinica: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    zona: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    calle: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    piso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    referencias_direccion: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    idCiudad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ciudades',
        key: 'idCiudad'
      }
    },
    colegiadoProfesional: {
      type: DataTypes.STRING(180),
      allowNull: false,
      references: {
        model: 'profesionales',
        key: 'colegiado'
      }
    },
    terminosDeAtencion: {
      type: DataTypes.TEXT,
      allowNull: false
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
    tableName: 'clinicas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idClinica" },
        ]
      },
      {
        name: "fk_clinica_ciudad1_idx",
        using: "BTREE",
        fields: [
          { name: "idCiudad" },
        ]
      },
      {
        name: "fk_clinica_profesionales1_idx",
        using: "BTREE",
        fields: [
          { name: "colegiadoProfesional" },
        ]
      },
    ]
  });
};
