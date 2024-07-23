const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserAccountSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email_id: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  Date_of_Birth: { type: Date, required: true },
  First_Name: { type: String, required: true },
  Last_Name: { type: String, required: true },
}, { timestamps: true });

UserAccountSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('UserAccount', UserAccountSchema);
