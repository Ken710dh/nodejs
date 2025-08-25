const express = require('express')
const route = express.Router()

const newsController = require('../controllers/NewController')

route.get('/', newsController.index)

module.exports = route