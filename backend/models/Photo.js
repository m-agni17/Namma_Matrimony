const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  photo_id: { type: Number, required: true, unique: true },
  photo: { type: Buffer, required: true },
  Photo_type: { type: String, required: true },
  user_id: { type: String, required: true, ref: 'UserAccount' },
}, { timestamps: true });

module.exports = mongoose.model('Photo', PhotoSchema);
