const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
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
      type: DataTypes.DATEONLY,
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
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "email_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    urlFotoPerfil: {
      type: DataTypes.STRING(180),
      allowNull: true
    },
    urlFotoPortada: {
      type: DataTypes.STRING(180),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(45),
      allowNull: true
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
      allowNull: true,
      references: {
        model: 'profesionales',
        key: 'colegiado'
      }
    },
    idTipoUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipos_usuario',
        key: 'idTipoUsuario'
      }
    }
  }, {
    sequelize,
    tableName: 'usuarios',
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
      {
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "fk_usuario_ciudad1_idx",
        using: "BTREE",
        fields: [
          { name: "idCiudad" },
        ]
      },
      {
        name: "fk_usuario_profesionales1_idx",
        using: "BTREE",
        fields: [
          { name: "colegiadoProfesional" },
        ]
      },
      {
        name: "fk_usuario_tipo_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "idTipoUsuario" },
        ]
      },
    ]
  });
};
