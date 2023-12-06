const Buyer = require("../models/Buyer");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getToken(req, res) {
  let user;

  if (req.body.email.includes("@")) {
    user = await Buyer.findOne({ email: req.body.email });
    if (!user) {
      user = await Admin.findOne({ email: req.body.email });
      user && (user.isAdmin = true);
    }
  }
  if (!user) return res.json({ msg: "Wrong credentials..." });

  const verifyPassword = await bcrypt.compare(req.body.password, user.password);
  if (!verifyPassword) return res.json({ msg: "Wrong credentials..." });

  let token;

  user.isAdmin
    ? ((token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET_ADMIN)), (user.role = "admin"))
    : ((token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET_BUYER)), (user.role = "buyer"));

  const { firstname, lastname, email, _id, role } = user;
  return res.json({
    token,
    firstname,
    lastname,
    email,
    id: _id,
    role,
  });
}

module.exports = {
  getToken,
};
