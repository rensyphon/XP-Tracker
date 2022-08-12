const asyncHandler = require('express-async-handler')
const Xp = require ('../model/xpModel')
// Get Xp 
// @route GET /api/xp
// @access authentication will be required
const getXp = asyncHandler(async (req, res) => {
  const xp = await Xp.find()

  res.status(200).json(xp)
});

// POST Xp 
// @route POST /api/xp
// @access authentication will be required
const setXp = asyncHandler(async(req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
   }
  const xp = await Xp.create({
    text: req.body.text
  })
  res.status(200).json(xp)
  
});

// PUT Xp 
// @route PUT /api/xp/:id
// @access authentication will be required
const updateXp = asyncHandler(async(req, res) => {
  const xp = await Xp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  if(!xp){
    res.status(400)
    throw new Error('Xp not found!')
  }
  const updatedXp = await Xp.findById(xp.id)

  res.status(200).json(updatedXp)
});

// DELETE Xp 
// @route DELETE /api/xp/:id
// @access authentication will be required
const deleteXp = asyncHandler(async(req, res) => {
  const xp = await Xp.findById(req.params.id)
  if (!xp) {
    res.status(400)
    throw new Error('Xp not found!')
  }

  await xp.remove()

  res.status(200).json({id: req.params.id}) 
});

module.exports = {
  getXp,
  setXp,
  updateXp,
  deleteXp,
};