var express = require('express')
    router = express.Router()



router.get('/', main)

router.post('/user', addNewUser)

router.get('/login', loginUser)


module.exports = router