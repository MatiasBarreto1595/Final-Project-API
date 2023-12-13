const Buyer = require("../models/Buyer");
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  const buyers = await Buyer.find().populate("orders");
  return res.json(buyers);
}

// Display the specified resource.
async function show(req, res) {
  if (req.auth.sub === req.params.id) {
    try {
      const buyer = await Buyer.findById(req.params.id).select("-password").populate("orders");
      return res.json(buyer);
    } catch (error) {
      return res.json({ msg: "Buyer not found" });
    }
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
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

    const token = jwt.sign({ sub: buyer.id }, process.env.JWT_SECRET_BUYER);
    return res.json({ token, firstname, lastname, email, id: buyer._id });
  } catch (error) {
    console.log(error);
    return res.json({ msg: "Buyer already exists" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    let buyerToUpdate = await Buyer.findById(req.params.id);
    let myAdmin = await Admin.findById(req.auth.sub);
    if (req.params.id !== req.auth.sub && !myAdmin) {
      return res.json({ msg: "You don't have enough permissions" });
    }

    const { firstname, lastname, email, direction, phone, password, newPassword } = req.body;
    if (password && verifyPassword) {
      const verifyPassword = await bcrypt.compare(password, buyerToUpdate.password);
      if (!verifyPassword) return res.json({ msg: "wrong credentials" });
      const hashedPassword = await bcrypt.hash(newPassword, 10);
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
    buyerToUpdate = await Buyer.findById(req.params.id);
    return res.json(buyerToUpdate);
  } catch (error) {
    return res.json({ msg: "Buyer not found" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    let myAdmin = await Admin.findById(req.auth.sub);
    if (req.params.id === req.auth.sub || myAdmin) {
      await Buyer.findByIdAndDelete(req.params.id);
      return res.json({ msg: "Buyer successfully destroy" });
    } else {
      return res.json({ msg: "You don't have enough permissions" });
    }
  } catch (error) {
    return res.json({ msg: "Buyer not found" });
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
