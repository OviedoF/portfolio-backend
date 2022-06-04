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
    console.log('hola toy guardando el filename')
    this.imgUrl = `http://localhost:4000/images/${filename}`;
    console.log('hola ya guardè el filename');
}

const projectModel = mongoose.model('project', projectSchema);

module.exports = projectModel;