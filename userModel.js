const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
});

const User = mongoose.model('User', userSchema);

exports.createUser = (uName, uEmail, uPassword) => {
    let user = new user({
        name: uName,
        email: uEmail,
        password: uPassword
    })
    return user;
}

exports.getUser = async (uName) => {
    var user = await User.find({ name: uName })
    return user
}