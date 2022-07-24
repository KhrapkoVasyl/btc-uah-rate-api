'use strict';

const express = require('express');
const { PREFIX } = require('./config');
const rateController = require('./controllers/rateController');

const app = express();

app.use(express.json());

app.get(PREFIX + '/rate', rateController.getRate);

module.exports = app;
