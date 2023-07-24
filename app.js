const express = require('express');
const cors = require('cors');
const collection = require('./mongo');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', cors(), (req, res) => {});

app.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  const data = {
    name: name,
    email: email,
    message: message,
  };
  try {
    await collection.insertMany([data]);

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
  // await collection.insertMany([data]);
});

app.listen(8000, () => {
  console.log('Port Connected');
});
