require('dotenv').config()
const express = require('express')
const sequelize = require('./db.cjs')
const cors = require('cors')
const router = require('./routes/index.cjs')
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => {
			console.log(`server started on http://localhost:${PORT}`)
		})
	} catch (e) {
		console.log(e)
	}
}
start()
const PORT = process.env.PORT || 5001
