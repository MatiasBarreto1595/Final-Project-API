const express = require("express");
const router = express.Router();
const buyerController = require("../controllers/buyerController");

router.get("/", buyerController.index);
router.get("/:id", buyerController.show);
router.post("/", buyerController.store);
router.patch("/:id", buyerController.update);
router.delete("/:id", buyerController.destroy);

module.exports = router;
