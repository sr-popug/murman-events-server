const { OfferPost } = require('../models/models.cjs')
const path = require('path')
const uuid = require('uuid')

class OfferPostController {
	async change(req, res) {
		try {
			const { id } = req.params
			let { title, description, price, date, time, place, type } = req.body
			let fileName = uuid.v4() + '.jpg'
			console.log(req.files)
			if (req.files) {
				let { img } = req.files
				img.mv(path.resolve(__dirname, '..', 'static', fileName))
			}

			let post
			if (req.files) {
				post = await OfferPost.update(
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
			} else {
				post = await OfferPost.update(
					{
						title,
						description,
						price,
						date,
						time,
						place,
						type,
					},
					{ where: { id } }
				)
			}
			return res.json(post)
		} catch (e) {
			console.log(e)
		}
	}
	async create(req, res) {
		try {
			const { title, description, price, date, time, place, type } = req.body
			const { img } = req.files
			const fileName = uuid.v4() + '.jpg'
			img.mv(path.resolve(__dirname, '..', 'static', fileName))

			const post = OfferPost.create({
				title,
				description,
				price,
				date,
				time,
				place,
				type,
				img: fileName,
			})

			return res.json(post) // не возращает, но при этом на сервер заносит
		} catch (e) {
			console.log(e)
		}
	}
	async delete(req, res) {
		const { id } = req.params
		const post = await OfferPost.destroy({
			where: { id },
		})
		return res.json(post)
	}
	async getAll(req, res) {
		const posts = await OfferPost.findAll()
		return res.json(posts)
	}
	async getOne(req, res) {
		const { id } = req.params
		const post = await OfferPost.findOne({
			where: { id },
		})
		return res.json(post)
	}
}

module.exports = new OfferPostController()
