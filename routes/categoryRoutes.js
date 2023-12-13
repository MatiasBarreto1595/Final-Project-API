const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { expressjwt: checkJwt } = require("express-jwt");
const ensureIsAdmin = require("../middlewares/ensureIsAdmin");

router.get("/", categoryController.index);
router.get("/:id", categoryController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  ensureIsAdmin,
  categoryController.store,
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  ensureIsAdmin,
  categoryController.update,
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }),
  ensureIsAdmin,
  categoryController.destroy,
);

module.exports = router;
