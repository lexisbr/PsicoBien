const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eventos', {
    idEvento: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    horaInicial: {
      type: DataTypes.TIME,
      allowNull: false
    },
    horaFinal: {
      type: DataTypes.TIME,
      allowNull: false
    },
    fechaEvento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    idEstadosEventos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estados_eventos',
        key: 'idEstadosEventos'
      }
    },
    idAgenda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'agendas',
        key: 'idAgenda'
      }
    },
    idTipoEvento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipos_eventos',
        key: 'idTiposEventos'
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
    },
    pacienteDni: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'dni'
      }
    }
  }, {
    sequelize,
    tableName: 'eventos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEvento" },
        ]
      },
      {
        name: "fk_eventos_estados_eventos1_idx",
        using: "BTREE",
        fields: [
          { name: "idEstadosEventos" },
        ]
      },
      {
        name: "fk_eventos_agenda1_idx",
        using: "BTREE",
        fields: [
          { name: "idAgenda" },
        ]
      },
      {
        name: "fk_eventos_tipos_eventos1_idx",
        using: "BTREE",
        fields: [
          { name: "idTipoEvento" },
        ]
      },
      {
        name: "fk_evento_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "pacienteDni" },
        ]
      },
    ]
  });
};
