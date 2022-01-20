const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const db = require('./config/db.config')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout' )
app.use(expressLayouts)
app.use(express.static('public'))

app.use(express.json())

db.on('error', (err) => console.error(err))
db.once('open', () => console.log('connected to DB'))

app.use('/', indexRouter)


app.listen(process.env.PORT || 3000, () => console.log('Server started'))