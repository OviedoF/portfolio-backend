const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');

const projectSchema = new Schema ({
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

projectSchema.methods.setImgUrl = (filename) => {
    this.imgUrl = `${__dirname}/images/${filename}`;
}

const projectModel = mongoose.model('project', projectSchema);

module.exports = projectModel;