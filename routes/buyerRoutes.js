const express = require("express");
const router = express.Router();
const buyerController = require("../controllers/buyerController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get(
  "/",
  checkJwt({ secret: process.env.JWT_SECRET_ADMIN, algorithms: ["HS256"] }),
  buyerController.index,
);
router.get(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET_BUYER, algorithms: ["HS256"] }),
  buyerController.show,
);
router.post("/", buyerController.store);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET_BUYER, algorithms: ["HS256"] }),
  buyerController.update,
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.JWT_SECRET_BUYER, algorithms: ["HS256"] }),
  buyerController.destroy,
);

module.exports = router;
