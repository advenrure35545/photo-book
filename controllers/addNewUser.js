var User = require('../models/user')

module.exports = (req, res) => {
    var user = {
        email: req.body.email,
        pass: req.body.pass
    }

    var n_user = new User(user)


    n_user.save((err) => {
        if(err) return console.log(err)
    })


       


}