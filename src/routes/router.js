'use strict';

const express = require('express');

const rateController = require('../controllers/rateController');
const subscriptionСontroller = require('../controllers/subscriptionСontroller');
const validateRequest = require('../middlewares/validateRequest');
// eslint-disable-next-line max-len
const subscribeValidationSchema = require('../middlewares/subscribeValidationSchema');

const router = express.Router();

router.route('/rate').get(rateController.getRate);
router
  .route('/subscribe')
  .post(
    subscribeValidationSchema,
    validateRequest,
    subscriptionСontroller.subscribe
  );
router.route('/sendEmails').post(subscriptionСontroller.sendEmails);

module.exports = router;
