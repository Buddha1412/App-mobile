// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { db } = require('./firebase');

const app = express();
app.use(bodyParser.json());

app.post('/save-user', async (req, res) => {
  const { userId, name, picture, email } = req.body;

  if (!userId || !name) {
    return res.status(400).send({ error: 'Missing required fields' });
  }

  try {
    await db.collection('users').doc(userId).set(
      {
        name,
        picture,
        email,
        lastLogin: new Date(),
      },
      { merge: true }
    );
    res.status(200).send({ status: 'User data saved successfully' });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
