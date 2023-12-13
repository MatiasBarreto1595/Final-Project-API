const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");
const ensureIsAdmin = require("../middlewares/ensureIsAdmin");

router.use(checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }));
router.get("/", ensureIsAdmin, orderController.index);
router.post("/", orderController.store);
router.patch("/:id", orderController.update);
router.delete("/:id", ensureIsAdmin, orderController.destroy);

module.exports = router;
