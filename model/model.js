const mongoose = require('mongoose')
const moment = require('moment')
const shortid = require('shortid')
const Schema = mongoose.Schema

UserSchema = new Schema({
  _id: {
    type: String,
    'default': shortid.generate
  },
  username: String,
  password: String,
  email: String,
  tel: Number,
  avatar: {
    type: String,
    'default': 'http://p79iy6oha.bkt.clouddn.com/2018/04/17-14:17:15-consignment-22.png'
  },
  date: {
    type: String,
    'default': moment(new Date()).format('YYYY-M-D')
  },
  name: String
})
const User = mongoose.model('User', UserSchema)

VoteActiveSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  banner: String,
  title: String,
  subtitle: String,
  start: String,
  end: String,
  status: String,
  artprods: [{
    type: Schema.Types.ObjectId,
    ref: vote
  }]
})
const VoteActive = mongoose.model('VoteActive', VoteActiveSchema)