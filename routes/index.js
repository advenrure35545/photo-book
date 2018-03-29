var express = require('express')
    router = express.Router()
    addNewUser = require('../controllers/addNewUser')



//router.get('/', main)

router.post('/user', addNewUser)

//router.get('/login', loginUser)


module.exports = router