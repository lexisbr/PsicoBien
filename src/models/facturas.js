const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facturas', {
    idfactura: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    monto: {
      type: DataTypes.DECIMAL(10,0),
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
    idEvento: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'eventos',
        key: 'idEvento'
      }
    }
  }, {
    sequelize,
    tableName: 'facturas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idfactura" },
        ]
      },
      {
        name: "fk_factura_evento1_idx",
        using: "BTREE",
        fields: [
          { name: "idEvento" },
        ]
      },
    ]
  });
};
