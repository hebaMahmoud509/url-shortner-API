const controller = require("../controller/controller")
const express = require('express')
const router = express.Router();
router.get('/',controller.get_all_urls)

router.post('/shortUrls',controller.shrink_url)

router.get('/:shortUrl',controller.redirect_to_link)
module.exports = router;