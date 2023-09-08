const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('horarios_disponibles', {
    idHorariosDisponibles: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    horarioInicial: {
      type: DataTypes.TIME,
      allowNull: false
    },
    horarioFin: {
      type: DataTypes.TIME,
      allowNull: false
    },
    idClinica: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clinica',
        key: 'idClinica'
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
    tableName: 'horarios_disponibles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idHorariosDisponibles" },
        ]
      },
      {
        name: "fk_horarios_disponibles_clinica1_idx",
        using: "BTREE",
        fields: [
          { name: "idClinica" },
        ]
      },
    ]
  });
};
