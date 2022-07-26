'use strict';

const subscriptionService = require('../services/subscriptionService');

module.exports.subscribe = async (req, res) => {
  try {
    res.setHeader('content-type', 'application/json');
    await subscriptionService.subscribe(req.body.email);
    return res.status(200).send();
  } catch (err) {
    return res.status(409).send();
  }
};
