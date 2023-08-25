const express = require("express");
const {
	createShortURl,
	getURLByShortCode,
	getUrlsByUserEmail,
} = require("../../controllers/url.controller");
const router = express.Router();


router.route("/shorten").post(createShortURl);

router.route("/user/:email").get(getUrlsByUserEmail);

router.route("/:urlShortId").get(getURLByShortCode);

module.exports = router;
