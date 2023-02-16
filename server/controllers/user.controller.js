const { User } = require('../models/user.model')

async function login (req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.find({email});

    if (user.length) {
      if (user[0].password === password) {
        res.status(200).send(user[0]);
      } else {
        res.status(401).send('Invalid password.');
      }
    } else {
      res.status(401).send('There is no account with this email.');
    }
    
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function register (req, res) {
  try {
    const { email } = req.body;
    const user = await User.find({email});

    if (!user.length) {
      const newUser = await User.create(req.body);
      res.status(201).send(newUser);
    } else {
      res.status(401).send('There is already an account with this email.');
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function getAllUsers (req, res) {
  try {
    const users = await User.find({}, {firstName: 1, lastName: 1, email: 1});
    res.status(200).send(users); 
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


module.exports = {
  login,
  register,
  getAllUsers
}