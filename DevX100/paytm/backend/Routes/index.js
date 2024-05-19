const express = require('express');
const router = express.Router();
const userRoute = require('./User')

const app = express();
router.use('api/v1/user', userRoute);

module.exports = Router;