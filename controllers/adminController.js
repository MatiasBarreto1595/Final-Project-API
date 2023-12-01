const Product = require("../models/Product");
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const products = await Product.find();
    const admins = await Admin.find();
    return res.json({ products, admins });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Show a specified resource.
async function show(req, res) {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);

    if (admin) {
      return res.json({ admin });
    } else {
      return res.status(404).json({ error: "Administrador no encontrado" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
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
try {
  const adminToUpdate = await Admin.findById(req.params.id);
  let admin;
    admin = await Admin.findById(req.auth.sub);
    !admin && (admin = await Admin.findById(req.auth.sub));
    if (!admin) return res.json({ msg: "Not logged in" });
    
    const { firstname, lastname, email, password, newPassword } = req.body;
    const verifyPassword = await bcrypt.compare(password, adminToUpdate.password);
    const hashedPassword = newPassword ? await bcrypt.hash(newPassword, 10) : undefined;

    if (password && verifyPassword) {
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
    return res.json(adminToUpdate);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }

// Remove the specified resource from storage.
async function destroy(req, res) {
  try {
    const { id } = req.params;
    const deletedAdmin = await Admin.findByIdAndDelete(id);

    if (deletedAdmin) {
      return res.json({ message: "Administrador eliminado exitosamente" });
    } else {
      return res.status(404).json({ error: "Administrador no encontrado" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
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
