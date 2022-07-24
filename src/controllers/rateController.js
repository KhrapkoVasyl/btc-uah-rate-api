'use strict';

const getRateService = require('../services/getRateService');

module.exports.getRate = async (req, res) => {
  try {
    const rate = await getRateService();
    return res.status(200).json(rate);
  } catch (err) {
    return res.status(400).send();
  }
};
