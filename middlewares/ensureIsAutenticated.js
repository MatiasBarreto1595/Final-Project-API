const Order = require("../models/Order");
const jwt = require("jsonwebtoken");

async function ensureIsAutenticated(req, res, next) {
  try {
    const token = req.auth.sub;
    const order = await Order.findById(req.params.id);
    if (order.buyer == token.sub._id) {
      return next();
    } else {
      res.status(403).json({ error: "Acceso no autorizado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = ensureIsAutenticated;
