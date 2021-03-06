'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Activity.belongsTo(models.Workpackage);
      Activity.hasOne(models.user);
      Activity.hasMany(models.Effort)
    }
  }
  Activity.init({
    // process_id: DataTypes.INTEGER,
    workpackage_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    estimated_effort: DataTypes.FLOAT,
    remaining_effort: DataTypes.FLOAT,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};