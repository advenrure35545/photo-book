var express = require('express'),
    hbs = require('hbs')
    cookieParser = require('cookie-parser')
    bodyParser = require('body-parser')
    session = require('express-session')


var app = express()

var config = require('./config')
var port = config.port

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

hbs.registerPartials(__dirname + '/views/partials')

var router = require('./routes/index')

app.use(router)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
