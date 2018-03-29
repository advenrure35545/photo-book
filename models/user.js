var mongoose = require('mongoose')


mongoose.connect('mongodb://admin:baranov200@ds121349.mlab.com:21349/photo-book')


var Schema = mongoose.Schema

var userSchema = new Schema({
    first_name: String,
    last_name: String,
    age: {
        type: Number,
        min: 0,
        max: 130
    },
    email: {
        type: String,
        min: 6,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        min: 6,
        max: 50
    },
    vk: String,
    facebook: String,
    twitter: String,
    about_text: String,
    ava: String,
    albums: [{title: String, photos: [{url: String, comments: [{user_id: String, text: String}]}], back_photo: String}]
})


var User = mongoose.model('User', userSchema)

module.exports = User