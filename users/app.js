const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/authRouter')
// const profileRouter = require('./routes/profileRouter')

const errorHandler = require('./middlewares/errorHandler')

const app = express()

app.use(
	cors({
		origin: [process.env.CLIENT_URL, 'http://localhost:5000'],
		credentials: true,
	})
)

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use('/api/users/auth', authRouter)
// app.use('/api/users/profile', profileRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	console.log(`route not found: ${req.originalUrl}`)
	res.status(404).json({ message: 'The resourse you have been requesting not found' })
})

// Middleware For Error Handling
app.use(errorHandler)

module.exports = app