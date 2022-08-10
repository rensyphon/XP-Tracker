const express = require('express');
const router = express.Router()
const {getXp, setXp, updateXp, deleteXp,} = require('../controllers/xpController');

router.route('/').get(getXp).post(setXp);

router.route('/:id').put(updateXp).delete(deleteXp);





module.exports = router;