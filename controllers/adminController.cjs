const { Admin } = require('../models/models.cjs')

class AdminController {
	async auth(req, res, next) {
		try {
			const { name, password } = req.body
			if (
				name == process.env.ADMIN_NAME &&
				password == process.env.ADMIN_PASSWORD
			) {
				return res.json({ message: 'Авторизация прошла успешно', isAuth: true })
			}
			return res.json({ message: 'Введённые данные неверные', isAuth: false })
		} catch (e) {
			return res.json({ message: e })
		}
	}
	async check(req, res) {}
}

module.exports = new AdminController()
