const mongoose = require("mongoose");

const spanishFlashcardSchema = new mongoose.Schema(
  {
    mater: { type: String, required: true },
    image: String,
    translation: { type: String, required: true },
  },
  { timestamps: true }
);

const SpanishFlashcard = mongoose.model(
  "spanishFlashcard",
  spanishFlashcardSchema
);

module.exports = SpanishFlashcard;
