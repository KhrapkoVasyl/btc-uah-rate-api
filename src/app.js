'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const formData = require('express-form-data');

const router = require('./routes/router');

const { PREFIX } = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formData.parse());

app.use(PREFIX, router);

module.exports = app;
