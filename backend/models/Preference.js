const mongoose = require('mongoose');

const PreferenceSchema = new mongoose.Schema({
  preference_id: { type: String, required: true, unique: true },
  preferred_gender: { type: String, required: true },
  preferred_age: { type: String, required: true },
  height: { type: Number, required: true },
  Job: { type: String, required: true },
  Nationality: { type: String, required: true },
  Mother_Tongue: { type: String, required: true },
  Religion: { type: String, required: true },
  Preference_in_words: { type: String, required: true },
  user_id: { type: String, required: true, ref: 'UserAccount' },
}, { timestamps: true });

module.exports = mongoose.model('Preference', PreferenceSchema);
