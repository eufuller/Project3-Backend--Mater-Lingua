const mongoose = require("mongoose");

const italianFlashcardSchema = new mongoose.Schema(
  {
    mater: { type: String, required: true },
    image: String,
    translation: { type: String, required: true },
  },
  { timestamps: true }
);

const ItalianFlashcard = mongoose.model(
  "italianFlashcard",
  italianFlashcardSchema
);

module.exports = ItalianFlashcard;
