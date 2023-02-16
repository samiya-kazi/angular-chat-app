const { Schema, model } = require('mongoose');
const { userSchema } = require('./user.model');

const messageSchema = new Schema({
  content: {
    type: String,
    requires: true
  },
  sender: {
    type: userSchema,
    required: true
  }
})

const Message = model('Message', messageSchema);

module.exports = { messageSchema, Message };