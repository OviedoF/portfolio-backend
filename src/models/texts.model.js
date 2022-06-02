const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textSchema = new Schema({
    es: String,
    en: String
})

const textModel = mongoose.model('text', textSchema);

module.exports = textModel;