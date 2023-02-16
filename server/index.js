const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const MONGOOSE_URI = process.env.MONGOOSE_URI || 'mongodb://127.0.0.1:27017/angular-chat-app';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);


(async function () {
  try {
    await mongoose.connect(MONGOOSE_URI);
    console.log('Connected to DB.');
    app.listen(PORT, () => console.log('Server is listening on port ' + PORT))
  } catch (error) {
    console.log(error)
  }
})();

