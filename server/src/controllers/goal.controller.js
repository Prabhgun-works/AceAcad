const Goal = require('../models/Goal');

const getGoals = async (req, res) => {
  const goals = await Goal.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json({ success: true, data: goals });
};

const createGoal = async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({
      success: false,
      error: { code: 'VALIDATION_ERROR', message: 'Title is required' },
    });
  }

  const goal = await Goal.create({
    title,
    description: description || '',
    user: req.user._id,
  });

  res.status(201).json({ success: true, data: goal });
};

const updateGoal = async (req, res) => {
  const { goalId } = req.params;
  const updates = req.body;
  const goal = await Goal.findOneAndUpdate(
    { _id: goalId, user: req.user._id },
    updates,
    { new: true, runValidators: true }
  );

  if (!goal) {
    return res.status(404).json({
      success: false,
      error: { code: 'NOT_FOUND', message: 'Goal not found' },
    });
  }

  res.json({ success: true, data: goal });
};

const deleteGoal = async (req, res) => {
  const { goalId } = req.params;
  const goal = await Goal.findOneAndDelete({ _id: goalId, user: req.user._id });

  if (!goal) {
    return res.status(404).json({
      success: false,
      error: { code: 'NOT_FOUND', message: 'Goal not found' },
    });
  }

  res.json({ success: true, data: { id: goal._id } });
};

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
