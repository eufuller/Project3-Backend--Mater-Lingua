const mongoose = require("mongoose");

const frenchFlashcardSchema = new mongoose.Schema(
  {
    mater: { type: String, required: true },
    image: String,
    translation: { type: String, required: true },
  },
  { timestamps: true }
);

const FrenchFlashcard = mongoose.model(
  "frenchFlashcard",
  frenchFlashcardSchema
);

module.exports = FrenchFlashcard;
