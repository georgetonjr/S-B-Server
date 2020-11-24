const mongoose = require('mongoose')

const TagSchema = new mongoose.Schema({
  tagName:{
    type: String,
    required: true,
    unique: true,
  },

  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Tag', TagSchema);