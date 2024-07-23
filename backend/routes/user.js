const express = require('express');
const UserAccount = require('../models/UserAccount');
const Preference = require('../models/Preference');
const Photo = require('../models/Photo');
const BlockedProfile = require('../models/BlockedProfile');
const Match = require('../models/Match');
const UserSubscription = require('../models/UserSubscription');
const Subscription = require('../models/Subscription');
const Feedback = require('../models/Feedback');
const SuccessStory = require('../models/SuccessStory');

const router = express.Router();

// Add additional CRUD routes as needed for each model

module.exports = router;
