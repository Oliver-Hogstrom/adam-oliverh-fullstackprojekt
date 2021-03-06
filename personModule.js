const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const Person = mongoose.model('Person', personSchema);

exports.createPerson = (name, email, age) => {
    var person = new Person({
        name: name,
        email: email,
        age: age
    })
    return person;
}

exports.getAllPeople = async () => {
    let people = Person.find({})
    return people
}