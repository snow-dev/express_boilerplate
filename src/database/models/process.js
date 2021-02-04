'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define( 'Process', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING( 1234 )
    },
  }, {
    underscored: true,
    timestamps: false,
  } );
};