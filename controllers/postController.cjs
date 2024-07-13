const uuid = require('uuid')
const { Post } = require('../models/models.cjs')
const path = require('path')

class PostController {
	async create(req, res) {
		try {
			let { title, description, price, date, time, place, type } = req.body
			const { img } = req.files
			let fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))

			const post = await Post.create({
				title,
				description,
				price,
				date,
				time,
				place,
				type,
				img: fileName,
			})

			return res.json(post)
		} catch (e) {
			console.log(e)
		}
	}
	async delete(req, res) {
		const { id } = req.params
		const post = await Post.destroy({
			where: { id },
		})
		return res.json(post)
	}
	async change(req, res) {
		try {
			const { id } = req.params
			console.log(id)
			let { title, description, price, date, time, place, type } = req.body
			const { img } = req.files
			let fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))
			const post = await Post.update(
				{
					title,
					description,
					price,
					date,
					time,
					place,
					type,
					img: fileName,
				},
				{ where: { id } }
			)
			return res.json(post)
		} catch (e) {
			console.log(e)
		}
	}
	async getAll(req, res) {
		// Фильтровка
		const { title, date, type } = req.query
		let posts

		if (!title && !date && !type) {
			posts = await Post.findAll()
		}
		if (title && !date && !type) {
			posts = await Post.findAll({ where: { title } })
		}
		if (!title && date && !type) {
			posts = await Post.findAll({ where: { date } })
		}
		if (!title && !date && type) {
			posts = await Post.findAll({ where: { type } })
		}
		if (title && date && !type) {
			posts = await Post.findAll({ where: { title, date } })
		}
		if (title && !date && type) {
			posts = await Post.findAll({ where: { title, type } })
		}
		if (!title && date && type) {
			posts = await Post.findAll({ where: { date, type } })
		}
		if (title && date && type) {
			posts = await Post.findAll({ where: { title, date, type } })
		}

		return res.json(posts)
	}
	async getOne(req, res) {
		const { id } = req.params
		const post = await Post.findOne({
			where: { id },
		})
		return res.json(post)
	}
}

module.exports = new PostController()
