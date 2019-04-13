const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PhraseSchema = new Schema({
    phrase: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    },
    category_id: {
        type: String,
        required: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Phrase = mongoose.model('Phrase', PhraseSchema);