const mongoose = require('mongoose')
const Schema = mongoose.Schema

const heroSchema = new Schema({
  nickName: {
    type: String,
    required: true,
    unique: true
  },
  realName: {
    type: String,
    required: true
  },
  originDescription: {
    type: String
  },
  superPowers: {
    type: String
  },
  catchPhrase: {
    type: String
  },
  image: {
      url: {
        type: String
      }
  }
})

module.exports = mongoose.model('heroes', heroSchema)