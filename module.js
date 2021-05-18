const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MadMusic', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

exports.storeElement = async (element) => {
    await element.save()
}