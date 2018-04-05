var User = require('../models/user')


function mainStrategy(username, password, done){
    User.findOne({email: username}, (err, user) => {
        if(err) return console.log(err)

        if(user){
            console.log(user)
            done(null, user)
        }

    })
}

function serializeUser(user, done){
    done(null, user._id)
}

function deserializeUser(id, done){
    User.findById(id, function(err, user) {
        done(err, user);
    });
}


module.exports = {
    mainStrategy,
    serializeUser, 
    deserializeUser
}