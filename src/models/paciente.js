const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paciente', {
    dni: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    fechaNacimiento: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    url_foto: {
      type: DataTypes.STRING(180),
      allowNull: true
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
    tableName: 'paciente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dni" },
        ]
      },
    ]
  });
};
