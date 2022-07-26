'use strict';

const express = require('express');
const { PREFIX } = require('./config');
const rateController = require('./controllers/rateController');
const subscriptionСontroller = require('./controllers/subscriptionСontroller');

const app = express();

app.use(express.json());

app.get(PREFIX + '/rate', rateController.getRate);
app.post(PREFIX + '/subscribe', subscriptionСontroller.subscribe);

module.exports = app;
