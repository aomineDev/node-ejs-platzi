const express = require('express')
const app = express()

const { config } = require('./config')
const moviesApi = require('./routes/movies')

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers')

// body parser
app.use(express.json())

moviesApi(app)

app.use(logErrors)
app.use(errorHandler)

app.listen(config.port, () => {
  console.log(`listening http://localhost:${config.port}`)
})