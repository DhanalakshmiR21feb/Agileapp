const express = require("express");
const eventsRoute = require("./events.route");
const router = express.Router();
router.use("/events", eventsRoute);

module.exports = router;