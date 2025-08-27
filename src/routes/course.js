const express = require('express')
const route = express.Router()

const courseController = require('../controllers/CourseController')
route.get('/:slug', courseController.show)
route.get('/create', courseController.create)
route.post('/store', courseController.store)

module.exports = route