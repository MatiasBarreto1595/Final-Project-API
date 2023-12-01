const Admin = require("../models/Admin");

async function ensureIsAdmin(req, res, next) {
  try {
    const myAdmin = await Admin.findById(req.auth.sub);
    myAdmin ? next() : res.json({ msg: "You don't have enough permissions" });
  } catch (error) {
    return res.json({ msg: "Server error" });
  }
}

module.exports = ensureIsAdmin;
