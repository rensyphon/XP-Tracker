const asyncHandler = require('express-async-handler');

// Get Xp 
// @route GET /api/xp
// @access authentication will be required
const getXp = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get XP'})
});

// POST Xp 
// @route POST /api/xp
// @access authentication will be required
const setXp = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
   

  }
  res.status(200).json({message: 'Set Xp'})
  
});

// PUT Xp 
// @route PUT /api/xp/:id
// @access authentication will be required
const updateXp = asyncHandler(async  (req, res) => {
  res.status(200).json({message: `Update XP ${req.params.id}`})
});

// DELETE Xp 
// @route DELETE /api/xp/:id
// @access authentication will be required
const deleteXp = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete XP ${req.params.id}`}) 
});

module.exports = {
  getXp,
  setXp,
  updateXp,
  deleteXp,
};