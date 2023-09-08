const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mensaje', {
    dniUsuarioRemitente: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'dni'
      }
    },
    dniUsuarioReceptor: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'dni'
      }
    },
    contenido: {
      type: DataTypes.TEXT,
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
    tableName: 'mensaje',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dniUsuarioRemitente" },
          { name: "dniUsuarioReceptor" },
        ]
      },
      {
        name: "fk_mensaje_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "dniUsuarioRemitente" },
        ]
      },
      {
        name: "fk_mensaje_usuario2_idx",
        using: "BTREE",
        fields: [
          { name: "dniUsuarioReceptor" },
        ]
      },
    ]
  });
};
