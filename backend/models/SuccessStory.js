const mongoose = require('mongoose');

const SuccessStorySchema = new mongoose.Schema({
  story_id: { type: Number, required: true, unique: true },
  bride_id: { type: String, required: true, ref: 'UserAccount' },
  groom_id: { type: String, required: true, ref: 'UserAccount' },
  marriage_date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('SuccessStory', SuccessStorySchema);
