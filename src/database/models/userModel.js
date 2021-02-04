'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define( 'user', {
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
      type: DataTypes.STRING,
      unique: true,
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
  
  User.association = function (models) {
    User.hasMany(models.Activity);
  }
  
  return User;
};