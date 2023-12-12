const express = require("express");
const router = express.Router();
const resetDB = require("../controllers/resetDB");

router.get("/", resetDB.runAllSeeders);

module.exports = router;
