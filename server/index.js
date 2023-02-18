const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require("http");
const { Server } = require("socket.io");
const router = require('./router');
const { newMessage } = require('./controllers/chat.controller');

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const MONGOOSE_URI = process.env.MONGOOSE_URI || 'mongodb://127.0.0.1:27017/angular-chat-app';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const server = http.createServer(app);

(async function () {
  try {
    await mongoose.connect(MONGOOSE_URI);
    console.log('Connected to DB.');
    server.listen(PORT, () => console.log('Server is listening on port ' + PORT))
  } catch (error) {
    console.log(error)
  }
})();


//Socket IO logic

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("join_room", (room_id) => {
    socket.join(room_id);
  });

  socket.on("send_message", async (data) => {
    //const postRes = await postMessage(data);
    const updatedChat = await newMessage(data);
    socket.to(data.chatId).emit("receive_message", updatedChat);
  });
});