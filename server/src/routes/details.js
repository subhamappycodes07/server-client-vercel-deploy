const express = require('express')
const router = express.Router()
const { getAllDetails } = require('../controllers/getAllDetailes')

router.route('/').get(getAllDetails)

module.exports = router