'use strict'
module.exports = (sequelize, DataTypes) => {
	
	const User = sequelize.define('User', {
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					is: /^[\W\D\s]+$/i,
					notEmpty: true
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isEmail: true,
					notEmpty: true
				},
				unique: {
					args: true,
					msg: 'Email already taken.'
				}
			}
		}, {
			underscored: true,
			paranoid: true
		}
	);
	// User.association = (models) => {
	// 	User.hasMany(models.Order, {
	// 		foreignKey: 'user_id'
	// 	});
	// }
	
	return User;
}