const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('especialidades', {
    idEspecialidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    },
    esModeloTerapeutico: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'especialidades',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEspecialidad" },
        ]
      },
    ]
  });
};
