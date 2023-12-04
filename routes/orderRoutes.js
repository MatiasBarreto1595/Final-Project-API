const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", orderController.index);
router.get("/:id", orderController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET_ADMIN, algorithms: ["HS256"] }),
  orderController.store,
);
router.patch("/:id", orderController.update);
router.delete("/:id", orderController.destroy);

module.exports = router;
