const express = require('express');
const router = express.Router()
const {getXp, setXp, updateXp, deleteXp,} = require('../controllers/xpController');

router.get('/', getXp);

router.post('/', setXp);

router.put('/:id', updateXp);

router.delete('/:id', deleteXp);



module.exports = router