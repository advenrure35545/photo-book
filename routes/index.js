var express = require('express')
    router = express.Router()
    main = require('../controllers/main')
    loginUser = require('../controllers/loginUser')
    addNewUser = require('../controllers/addNewUser')
    feed = require('../controllers/feed')
    passport = require('passport')



router.get('/', main)

router.get('/feed', feed)

router.post('/user', addNewUser)

router.get('/entry', loginUser)

router.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login'}))

router.get('/feed', (req, res) => {
    if(req.isAuthenticated()){
        res.render('mainFeed', {user: req.user})
    }else{
        res.redirect('/login')
    }
})


router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/login')
})



module.exports = router