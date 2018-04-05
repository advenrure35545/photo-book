var express = require('express'),
    hbs = require('hbs')
    cookieParser = require('cookie-parser')
    bodyParser = require('body-parser')
    session = require('express-session')
    mongoose = require('mongoose')
    auth = require('./auth/mainStrategy')
    passport = require('passport')
    LocalStrategy = require('passport-local').Strategy

var app = express()
mongoose.connect('mongodb://admin:baranov200@ds121349.mlab.com:21349/photo-book')
mongoose.set('debug', true)


var config = require('./config')
var port = config.port

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'pass'
  }, auth.mainStrategy))

passport.serializeUser(auth.serializeUser)
  
passport.deserializeUser(auth.deserializeUser)

hbs.registerPartials(__dirname + '/views/partials')

var router = require('./routes/index')

app.use(router)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
