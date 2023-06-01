const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
  full_url: {
    type: String,
    required: true
  },
  short_url: {
    type: String,
    required: true,
    default: function() {
      return 'http://localhost:3010/api/' + shortId.generate();
    }
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)