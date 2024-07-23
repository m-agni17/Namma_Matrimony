const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  match_id: { type: String, required: true, unique: true },
  initiator_id: { type: String, required: true, ref: 'UserAccount' },
  receiver_id: { type: String, required: true, ref: 'UserAccount' },
  date_of_match: { type: Date, required: true },
  interest_sent_on: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Match', MatchSchema);
