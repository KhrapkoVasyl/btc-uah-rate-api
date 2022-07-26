'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const formData = require('express-form-data');

const { PREFIX } = require('./config');
const rateController = require('./controllers/rateController');
const subscriptionСontroller = require('./controllers/subscriptionСontroller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formData.parse());

app.get(PREFIX + '/rate', rateController.getRate);
app.post(PREFIX + '/subscribe', subscriptionСontroller.subscribe);

module.exports = app;
