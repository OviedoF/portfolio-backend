const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tecnologySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String
    },
    description: {
        type: Object
    }
});

const tecnologyModel = mongoose.model('tecnology', tecnologySchema);

module.exports = tecnologyModel;