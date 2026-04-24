const mongoose = require('mongoose');

const historyEntrySchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    solved: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { _id: false }
);

const lcSnapshotSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },
    problemsSolved: {
      type: Number,
      default: 0,
    },
    easy: {
      type: Number,
      default: 0,
    },
    medium: {
      type: Number,
      default: 0,
    },
    hard: {
      type: Number,
      default: 0,
    },
    history: [historyEntrySchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('LCSnapshot', lcSnapshotSchema);
