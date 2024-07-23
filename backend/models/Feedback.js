const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  feedback_id: { type: Number, required: true, unique: true },
  user_id: { type: String, required: true, ref: 'UserAccount' },
  feedback_star: { type: Number, required: true },
  feedback_text: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Feedback', FeedbackSchema);
