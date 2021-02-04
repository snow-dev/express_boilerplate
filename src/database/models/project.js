'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.hasMany(models.Workpackage)
    }
  }
  Project.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    // client_id: {
    //   allowNull: false,
    //   type: DataTypes.INTEGER,
    // },
    project_type: {
      allowNull: false,
      type: DataTypes.STRING(1234)
    },
    code: {
      type: DataTypes.STRING
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    planned_effort: {
      type: DataTypes.FLOAT
    },
    active: {
      type: DataTypes.BOOLEAN
    },
    freezing_date: {
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};