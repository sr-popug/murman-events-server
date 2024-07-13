const sequelize = require('../db.cjs')
const { DataTypes } = require('sequelize')

const Type = sequelize.define('types', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
	value: { type: DataTypes.STRING },
})
const Admin = sequelize.define('admin', {
	name: { type: DataTypes.STRING, primaryKey: true },
	password: { type: DataTypes.STRING },
})

const Post = sequelize.define('post', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING(500000) },
	description: { type: DataTypes.STRING(500000) },
	img: { type: DataTypes.STRING },
	price: { type: DataTypes.INTEGER },
	date: { type: DataTypes.STRING },
	time: { type: DataTypes.STRING },
	place: { type: DataTypes.STRING },
	type: { type: DataTypes.STRING },
})
const OfferPost = sequelize.define('offerPost', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING(500000) },
	description: { type: DataTypes.STRING(500000) },
	img: { type: DataTypes.STRING },
	price: { type: DataTypes.INTEGER },
	date: { type: DataTypes.STRING },
	time: { type: DataTypes.STRING },
	place: { type: DataTypes.STRING },
	type: { type: DataTypes.STRING },
})

module.exports = {
	Admin,
	Post,
	Type,
	OfferPost,
}
