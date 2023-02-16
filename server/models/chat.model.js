const { Schema, model } = require('mongoose');
const { messageSchema } = require('./message.model');
const { userSchema } = require('./user.model');

const chatSchema = new Schema({
  users: {
    type: [userSchema],
    required: true
  },
  messages: {
    type: [messageSchema],
    required: true
  }
});

const Chat = model('Chat', chatSchema);

module.exports = Chat;