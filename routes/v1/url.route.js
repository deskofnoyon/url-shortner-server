const express = require('express');
const { createShortURl, getUrl } = require('../../controllers/url.controller');
const router = express.Router();

router
    .route("/shorten")
    .post(createShortURl)

router
    .route("/:urlShortId")
    .get(getUrl)

module.exports = router;