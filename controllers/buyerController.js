const Buyer = require("../models/Buyer");
const Admin = require("../models/Admin");
const Product = require("../models/Product");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  const buyers = await Buyer.find().populate("orders");
  return res.json(buyers);
}

// Display the specified resource.
async function show(req, res) {
  const buyer = await Buyer.findById(req.params.id).select("-password");
  return res.json({ buyer });
}

// Store a newly created resource in storage.
async function store(req, res) {
  const { firstname, lastname, email, direction, phone, password } = req.body;
  if (!firstname && !lastname && !email && !direction && !phone && !password)
    return res.json({ msg: "All fields are required" });
  const hashedPassword = await bcrypt.hash(password, 10);
  await Buyer.create({
    firstname,
    lastname,
    email,
    direction,
    phone,
    password: hashedPassword,
  });

  const buyer = await Buyer.findOne({ email });
  if (!buyer) return res.json({ msg: "Wrong credentials..." });

  const verifyPassword = await bcrypt.compare(password, buyer.password);
  if (!verifyPassword) return res.json({ msg: "Wrong credentials..." });

  const token = jwt.sign({ sub: buyer.id }, process.env.JWT_SECRET);
  return res.json({ token, firstname, lastname, email, id: _id });
}

// Update the specified resource in storage.
async function update(req, res) {
  const buyerToUpdate = await Buyer.findById(req.params.id);
  let buyer;
  buyer = await Buyer.findById(req.auth.sub);
  !buyer && (buyer = await Admin.findById(req.auth.sub));
  if (!buyer) return res.json({ msg: "Not logued in" });

  const { firstname, lastname, email, direction, phone, password, newPassword } = req.body;
  const verifyPassword = await bcrypt.compare(password, buyerToUpdate.password);
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  if (password && verifyPassword) {
    await Buyer.findByIdAndUpdate(req.params.id, {
      firstname,
      lastname,
      email,
      direction,
      phone,
      password: hashedPassword,
    });
  } else {
    await Buyer.findByIdAndUpdate(req.params.id, {
      firstname,
      lastname,
      email,
      direction,
      phone,
    });
  }
  return res.json(buyerToUpdate);
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
  
    const adminToDelete = await Admin.findById(req.params.id);
    let admin;
    admin = await Admin.findById(req.auth.sub);
    !admin && (admin = await Admin.findById(req.auth.sub));
    if (!admin) return res.json({ msg: "Not logged in" });

    const verifyPassword = await bcrypt.compare(req.body.password, admin.password);

    if (verifyPassword) {
      await Admin.findByIdAndDelete(req.params.id);
      return res.json({ message: "Admin deleted successfully" });
    } else {
      return res.json({ msg: "Wrong credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
