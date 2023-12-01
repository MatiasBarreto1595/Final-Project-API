const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const admins = await Admin.find();
    return res.json(admins);
  } catch (error) {
    return res.json({ error: "Not admins found" });
  }
}

// Show a specified resource.
async function show(req, res) {
  try {
    const admin = await Admin.findById(req.params.id);
    return res.json(admin);
  } catch (error) {
    return res.json({ error: "Admin not found" });
  }
}

// Store a newly created resource in storage.
async function store(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.json({ msg: "All fields are required" });
    }
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.json({ msg: "Admin with this e-mail already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });

    const { _id } = newAdmin;
    const token = jwt.sign({ sub: _id }, process.env.JWT_SECRET);

    return res.json({ token, firstname, lastname, email, id: _id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  try {
    const adminToUpdate = await Admin.findById(req.params.id);

    let verifyPassword = null;
    const { firstname, lastname, email, password, newPassword } = req.body;
    password && (verifyPassword = await bcrypt.compare(password, adminToUpdate.password));
    const hashedPassword = newPassword ? await bcrypt.hash(newPassword, 10) : undefined;

    if (verifyPassword) {
      await Admin.findByIdAndUpdate(req.params.id, {
        firstname,
        lastname,
        email,
        password: hashedPassword,
      });
    } else {
      await Admin.findByIdAndUpdate(req.params.id, {
        firstname,
        lastname,
        email,
      });
    }
    const adminUpdated = await Admin.findById(req.params.id);
    return res.json(adminUpdated);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const { id } = req.params;
    await Admin.findByIdAndDelete(id);
    return res.json({ message: "Administrador eliminado exitosamente" });
  } catch (error) {
    return res.json({ error: "Administrador no encontrado" });
  }
}

// ...

module.exports = {
  index,
  store,
  update,
  destroy,
  show,
};
