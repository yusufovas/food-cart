require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const router = require('./routes/routes')
const path = require('path')
const app = express()
const cors = require('cors')
const auth_router = require('./routes/auth')
const commands_router = require('./routes/commands')

const port = process.env.port || 6060

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/public', express.static(path.join(process.cwd(), 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'))

app.use(router)
app.use(auth_router)
app.use(commands_router)
    .listen(port, console.log(port))