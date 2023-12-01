const Product = require("../models/Product");
const Buyer = require("../models/Buyer");

// Display a listing of the resource.
async function index(req, res) {
  const Buyers = await Buyer.find().populate("orders");
  return res.json(Buyers);
}

// Display the specified resource.
async function show(req, res) {}

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
  show,
  store,
  update,
  destroy,
};
