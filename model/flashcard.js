const mongoose = require("mongoose")


const flashcardSchema = new mongoose.Schema({
    languageName: {type: String, required: true},
    mater: {type: String, required: true},
    image: {type: String, required: true},
    translation: {type: String, required: true}
    }, {timestamps: true});

const Flashcard = mongoose.model("flashcard", flashcardSchema)

module.exports = Flashcard;