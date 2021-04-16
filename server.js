const userRoutes     = require('./routes/user')
const userParameters = require('./routes/updateParameters')
const express        = require('express')

const app = express()

// JSON Parser
app.use(express.json())

// routes
app.get('/user', userRoutes)
app.post('/updateParameters', userParameters)

// api
app.use('/', express.static('public'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening at ${port}`))