const express = require("express");
const router = express.Router();
const buyerController = require("../controllers/buyerController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", buyerController.index);
router.get("/:id", buyerController.show);
router.post("/", buyerController.store);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  buyerController.update,
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  buyerController.destroy,
);

module.exports = router;
