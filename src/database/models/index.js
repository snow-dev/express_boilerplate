'use strict';

import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'dev';
import  config from  '../../config/database';
const db = {};

console.debug(config);
let sequelize
// if (config)
//   sequelize = new Sequelize(config.database, config.username, config.password, { dialect: 'mariadb' });
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], { dialect: 'mariadb' });
} else {
  sequelize = new Sequelize('rems_dev', 'root', 'sesamo', { dialect: 'mariadb' });
  try {
    sequelize.authenticate().then(conn => {
      console.log('Connection has been established successfully: ', conn);
    }).catch(error => {
      console.error('Error connecting to database: ', error);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
