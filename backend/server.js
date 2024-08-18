const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect('mongodb+srv://korbanelio:elio12@cluster0.qb4oogx.mongodb.net/?retryWrites=true&w=majority', {
  })
  .then(() => {
    console.log('Connected');

    const userSchema = new mongoose.Schema({
      username: String,
      email: String,
      password: String,
    });

    const User = mongoose.model('User', userSchema);


    app.post('/register', async (req, res) => {
      const { username, email, password } = req.body;

      const newUser = new User({
        username,
        email,
        password,
      });

      try {
        const savedUser = await newUser.save();
        res.json(savedUser);
      } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Failed' });
      }
    });

    app.get('/usernames', async (req, res) => {
      try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        console.error('no user found', error);
        res.status(500).json({ error: 'sorry no user found' });
      }
    });

    app.get('/', (req, res) => {
        res.send('hello world');
      });

    app.listen(5000, () => {
      console.log("Server is running on port: 5000");
    });
  })