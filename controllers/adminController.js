const Product = require("../models/Product");
const Admin = require("../models/Admin");

// Display a listing of the resource.
async function index(req, res) {
  const admins = await Admin.find();
  return res.json(admins);
}

// Store a newly created resource in storage.
async function store(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  store,
  update,
  destroy,
};
