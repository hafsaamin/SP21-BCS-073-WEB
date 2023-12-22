const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  filename: {
    type: String
  },
  createdAt: { type: Date, default: Date.now },
  // Add other fields as needed
});

const ImageModel = mongoose.model("images", imageSchema);
module.exports = ImageModel;
