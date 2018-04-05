var express = require('express')
    router = express.Router()
    main = require('../controllers/main')
    loginUser = require('../controllers/loginUser')
    addNewUser = require('../controllers/addNewUser')
    passport = require('passport')



router.get('/', main)

router.post('/user', addNewUser)

router.get('/login', loginUser)

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