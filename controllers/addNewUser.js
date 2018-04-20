var User = require('../models/user')

module.exports = (req, res) => {
    var user = {
        email: req.body.email,
        password: req.body.pass,
        first_name: req.body.fname,
        last_name: req.body.lname
    }

    var n_user = new User(user)


    n_user.save((err, user) => {
        if(err) return console.log(err)

        if(user){
            res.send('its ok')
        }

    })


       


}