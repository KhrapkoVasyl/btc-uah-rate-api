'use strict';

const subscriptionService = require('../services/subscriptionService');
const notificationService = require('../services/notificationService');

module.exports.subscribe = async (req, res) => {
  res.setHeader('content-type', 'application/json');
  try {
    await subscriptionService.subscribe(req.body.email);
    return res.status(200).send();
  } catch (err) {
    return res.status(409).send();
  }
};

module.exports.sendEmails = async (req, res) => {
  res.setHeader('content-type', 'application/json');
  await notificationService.notifySubscribers();
  return res.status(200).send();
};
