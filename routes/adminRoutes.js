const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkJwt } = require("express-jwt");

const isAdmin = (req, res, next) => {
//.....
  const isAdminUser = true; 
  if (isAdminUser) {
    next();
  } else {
    res.status(403).json({ message: "Acceso denegado. No eres un administrador." });
  }
};

router.get("/", isAdmin, adminController.index);
router.get("/:id", isAdmin, adminController.show);
router.post("/", isAdmin, adminController.store);
router.patch("/:id", isAdmin, checkJwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] }), adminController.update);
router.delete("/:id", isAdmin, adminController.destroy);

module.exports = router;
