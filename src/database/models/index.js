import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import DB from '../../config/database';

const basename = path.basename(__filename);
const  db = {};
const Op = Sequelize.Op;

DB.operatorsAliases = {
	$eq: Op.eq,
	$ne: Op.ne,
	$gte: Op.gte,
	$gt: Op.gt,
	$lte: Op.lte,
	$lt: Op.lt,
	$not: Op.not,
	$in: Op.in,
	$notIn: Op.notIn,
	$is: Op.is,
	$like: Op.like,
	$notLike: Op.notLike,
	$iLike: Op.iLike,
	$notILike: Op.notILike,
	$regexp: Op.regexp,
	$notRegexp: Op.notRegexp,
	$iRegexp: Op.iRegexp,
	$notIRegexp: Op.notIRegexp,
	$between: Op.between,
	$notBetween: Op.notBetween,
	$overlap: Op.overlap,
	$contains: Op.contains,
	$contained: Op.contained,
	$adjacent: Op.adjacent,
	$strictLeft: Op.strictLeft,
	$strictRight: Op.strictRight,
	$noExtendRight: Op.noExtendRight,
	$noExtendLeft: Op.noExtendLeft,
	$and: Op.and,
	$or: Op.or,
	$any: Op.any,
	$all: Op.all,
	$values: Op.values,
	$col: Op.col
};

const sequelize = new Sequelize(DB.database, DB.username, DB.password, DB);

fs.readdirSync(__dirname).filter(file => {
	return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
}).forEach(file => {
	const model = sequelize['import'](path.join(__dirname, file));
	db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
});

console.debug("Model db: ", db);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;