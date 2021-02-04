'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Effort extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Effort.belongsTo(models.Activity);
    }
  }
  
  Effort.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    activity_id: {
      type: DataTypes.INTEGER,
      references: 'activities',
      referencesKey: 'id'
    },
    date: DataTypes.DATE,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    duration: DataTypes.FLOAT,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Effort',
  });
  return Effort;
};

