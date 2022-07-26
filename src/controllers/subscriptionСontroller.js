'use strict';

const subscriptionService = require('../services/subscriptionService');

module.exports.subscribe = async (req, res) => {
  res.setHeader('content-type', 'application/json');
  try {
    await subscriptionService.subscribe(req.body.email);
    return res.status(200).send();
  } catch (err) {
    return res.status(409).send();
  }
};
