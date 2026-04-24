const express = require('express');
const router = express.Router();
const { getGoals, createGoal, updateGoal, deleteGoal } = require('../controllers/goal.controller');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.get('/', getGoals);
router.post('/', createGoal);
router.patch('/:goalId', updateGoal);
router.delete('/:goalId', deleteGoal);

module.exports = router;