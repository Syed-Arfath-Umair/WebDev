const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://***:***@cluster0.shuubmf.mongodb.net/paytm');

const User = mongoose.model('User', {
    username: String,
    password: String,
    firstName: String,
    lastName: String
});

module.export = {
    User
};
