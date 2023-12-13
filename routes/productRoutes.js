const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { expressjwt: checkJwt } = require("express-jwt");
const ensureIsAdmin = require("../middlewares/ensureIsAdmin");

router.get("/", productController.index);
router.get("/:id", productController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  ensureIsAdmin,
  productController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  ensureIsAdmin,
  productController.update,
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  ensureIsAdmin,
  productController.destroy,
);

module.exports = router;
