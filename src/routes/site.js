const express = require('express')
const route = express.Router()

const siteController = require('../controllers/SiteController')
const courseController = require('../controllers/CourseController')

route.get('/', siteController.index)
route.get('/:slug', courseController.show)

module.exports = route