'use strict';

require('dotenv').config();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const {
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REDIRECT_URI,
  OAUTH_REFRESH_TOKEN,
  USER_MAIL_ADDRESS,
} = process.env;

const OAuth2Client = new google.auth.OAuth2(
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REDIRECT_URI
);

// eslint-disable-next-line camelcase
OAuth2Client.setCredentials({ refresh_token: OAUTH_REFRESH_TOKEN });

module.exports.sendEmails = async (mailReceivers, subject, text) => {
  try {
    const accessToken = await OAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: USER_MAIL_ADDRESS,
        clientId: OAUTH_CLIENT_ID,
        clientSecret: OAUTH_CLIENT_SECRET,
        refreshToken: OAUTH_REFRESH_TOKEN,
        accessToken,
      },
    });

    const mailOptions = {
      from: USER_MAIL_ADDRESS,
      to: mailReceivers,
      subject,
      text,
    };

    const result = await transporter.sendMail(mailOptions);
    console.dir(`Result: ${result}`);
  } catch (err) {
    console.log(err);
  }
};
