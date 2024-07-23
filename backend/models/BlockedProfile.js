const mongoose = require('mongoose');

const BlockedProfileSchema = new mongoose.Schema({
  block_list_serial_n: { type: Number, required: true, unique: true },
  user_id: { type: String, required: true, ref: 'UserAccount' },
  blocked_user_id: { type: String, required: true, ref: 'UserAccount' },
}, { timestamps: true });

module.exports = mongoose.model('BlockedProfile', BlockedProfileSchema);
