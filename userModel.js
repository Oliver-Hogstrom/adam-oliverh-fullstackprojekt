const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
});

const User = mongoose.model('User', userSchema);

exports.createUser = (userName, mail, password) => {
    let user = new user({
        name: userName,
        email: mail,
        password: password
    })
    return user;
}

exports.getUser = async (userName) => {
    var user = await User.find({
        name: userName
    })
    return user
}