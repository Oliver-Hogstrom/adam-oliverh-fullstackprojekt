const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String
});

const User = mongoose.model('User', userSchema);

exports.saveUser = (name, password) => {
    var user = User({
        name: name,
        // email: mail,
        password: password
    })
    user.save();
}

exports.getUser = async (name) => {
    return await User.findOne({name: name})
}