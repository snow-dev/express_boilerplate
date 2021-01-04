'use strict';
module.exports = (sequelize, DataTypes) => {
  return sequelize.define( 'User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: true,
      defaultValue: true,
      type: DataTypes.BOOLEAN
    },
  
  }, {
    underscored: true,
    timestamps: false,
  } );
};