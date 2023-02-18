const Chat = require("../models/chat.model");
const { User } = require("../models/user.model");

 async function addChat (req, res) {
  try {
    const { userId1, userId2 } = req.body;
    const user1 = await User.findById(userId1);
    const user2 = await User.findById(userId2);

    if (user1 && user2) {
      const checkConvo = await Chat.findOne({users: {$all: [user1, user2]}});
      if (!checkConvo) {
        const newChat = await Chat.create({
          users: [user1, user2],
          messages: []
        });

        res.status(201).send(newChat);
      } else {
        res.status(401).send('A chat with these users already exists.');
      }
    } else {
      res.status(401).send('Invalid user IDs.');
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
 }


 async function getUserChats (req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    const chats = await Chat.find({users: {$in: [user]}});
    res.status(200).send(chats);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
 }


 async function addMessage (req, res) {
  try {
    const { id } = req.params;
    const { content, sender } = req.body;
    const updatedChat = await Chat.findByIdAndUpdate(id, {$push: {messages: [{content, sender}]}}, {new: true});
    res.status(200).send(updatedChat);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
 }


 async function newMessage (data) {
  try {
    const { chatId, content, sender } = data;
    const updatedChat = await Chat.findByIdAndUpdate(chatId, {$push: {messages: [{content, sender}]}}, {new: true});
    return updatedChat;
  } catch (error) {
    console.log(error);
  }
 }


 module.exports = { 
  addChat,
  getUserChats,
  addMessage,
  newMessage
 }