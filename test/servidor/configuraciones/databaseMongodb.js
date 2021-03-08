const mongoose = require('mongoose');
const URI = 'mongodb+srv://ecoenviroment:ecoenviroment@ecoenviroment.wlgyr.mongodb.net/ecoenviroment?retryWrites=true&w=majority';

mongoose.connect(URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(db => console.log('Database online'))
    .catch(err => console.log(err));

module.exports = mongoose;