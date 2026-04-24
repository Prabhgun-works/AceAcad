const LCSnapshot = require('../models/LCSnapshot');

const getProfile = async (req, res) => {
  let snapshot = await LCSnapshot.findOne({ user: req.user._id });
  if (!snapshot) {
    snapshot = await LCSnapshot.create({ user: req.user._id });
  }

  res.json({ success: true, data: snapshot });
};

const getHistory = async (req, res) => {
  const snapshot = await LCSnapshot.findOne({ user: req.user._id });
  res.json({ success: true, data: snapshot?.history || [] });
};

module.exports = { getProfile, getHistory };
