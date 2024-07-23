const mongoose = require('mongoose');

const UserSubscriptionSchema = new mongoose.Schema({
  user_id: { type: String, required: true, ref: 'UserAccount' },
  subscription_id: { type: Number, required: true, ref: 'Subscription' },
  user_discount: { type: Number, required: true },
  subscribed_on: { type: Date, required: true },
  expiry_date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('UserSubscription', UserSubscriptionSchema);
