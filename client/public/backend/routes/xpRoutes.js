const express = require('express');
const router = express.Router()
const {getXp} = require('../controllers/xpController');

router.get('/', getXp);


router.post('/', (req, res) => {
  res.status(200).json({message: 'Post XP'})
});

router.put('/:id', (req, res) => {
  res.status(200).json({message: `Update XP ${req.params.id}`})
});

router.delete('/:id', (req, res) => {
  res.status(200).json({message: `Delete XP ${req.params.id}`})
});



module.exports = router