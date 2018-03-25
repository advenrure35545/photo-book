var express = require('express')
    router = express.Router()



router.get('/', (req, res) => {
    res.send('Hello World!')
})


router.get('/login', (req, res) => {
    res.render('main')  
})


module.exports = router