const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  subscription_id: { type: Number, required: true, unique: true },
  subscription_name: { type: String, required: true },
  validity: { type: Number, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);
