const express = require('express');
const dotenv = require('dotenv').config();
const port  = process.env.PORT || 5000;

const app = express();

app.listen(port, () => console.log(`Server started on ${port}`));

app.get('/api/xp', (req, res) => {
  res.status(200).json({message: 'Get XP'})
});