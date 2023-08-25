const express = require('express');
const { createUser, getUser } = require('../../controllers/user.controller');
const router = express.Router();

router
    .route("/")
    .get(getUser)
    .post(createUser)

module.exports = router;