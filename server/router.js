const router = require('express').Router();
const userController = require('./controllers/user.controller')
const chatController = require('./controllers/chat.controller')

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/user', userController.getAllUsers);

router.get('/user/chat/:userId', chatController.getUserChats);
router.post('/chat', chatController.addChat);
router.post('/chat/:id', chatController.addMessage);


module.exports = router;