'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workpackage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Workpackage.belongsTo(models.Project)
      Workpackage.hasMany(models.Activity)
    }
  }
  Workpackage.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    project_id: {
      type: DataTypes.INTEGER
    },
    use_case_code: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    planned_effort: {
      type: DataTypes.FLOAT
    },
    status: {
      type: DataTypes.INTEGER
    },
    // parent_work_package_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Workpackage',
  });
  return Workpackage;
};