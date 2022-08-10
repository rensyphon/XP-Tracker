// Get Xp 
// @route GET /api/xp
// @access authentication will be required
const getXp = (req, res) => {
  res.status(200).json({message: 'Get XP'})
};

// POST Xp 
// @route POST /api/xp
// @access authentication will be required
const setXp = (req, res) => {
  res.status(200).json({message: 'Post XP'})
};

// PUT Xp 
// @route PUT /api/xp/:id
// @access authentication will be required
const updateXp = (req, res) => {
  res.status(200).json({message: `Update XP ${req.params.id}`})
};

// DELETE Xp 
// @route DELETE /api/xp/:id
// @access authentication will be required
const deleteXp = (req, res) => {
  res.status(200).json({message: `Delete XP ${req.params.id}`}) 
};

module.exports = {
  getXp,
  setXp,
  updateXp,
  deleteXp,
};