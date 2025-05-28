const express = require('express');
const cors = require('cors');
const { db } = require('./firebase');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/save-user', async (req, res) => {
  const { userId, name, email } = req.body;

  try {
    await db.collection('users').doc(userId).set({ name, email });
    res.status(200).send('User data saved');
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to save user');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
