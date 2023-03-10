const express = require('express')
const router = express.Router()
const { getWelcomeMessage } = require('../controllers/getWelcomeMessage')

router.route('/').get(getWelcomeMessage)

module.exports = router