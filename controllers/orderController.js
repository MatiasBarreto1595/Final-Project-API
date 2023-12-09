const Product = require("../models/Product");
const Category = require("../models/Category");
const Order = require("../models/Order");
const Buyer = require("../models/Buyer");

// Display a listing of the resource.
async function index(req, res) {
  const orders = await Order.find().populate("items").populate("buyer");
  return res.json(orders);
}

// Display the specified resource.
async function show(req, res) {
  const orders = await Order.findById(req.params.id).populate("items").populate("buyer");
  return res.json(orders);
}

// Store a newly created resource in storage.
async function store(req, res) {
  let items = req.body.items;
  const newOrder = await Order.create({
    buyer: req.auth.sub,
    items: items,
    state: "Pending",
  });
  for (let item of items) {
    const newStock = item.stock - qty;
    await Product.findByIdAndUpdate(item._id, { stock: newStock });
  }
  const buyer = await Buyer.findById(req.auth.sub);
  buyer.orders.push(newOrder);
  await buyer.save();
  return res.json(newOrder);
}

// Update the specified resource in storage.
async function update(req, res) {
  await Order.findByIdAndUpdate(req.params.id, { state: req.body.state });
  const order = await Order.findById(req.params.id);

  return res.json(order);
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const order = await Order.findById(req.params.id);
  await Buyer.findByIdAndUpdate(order.buyer, { $pull: { orders: req.params.id } });
  await Order.findByIdAndRemove(req.params.id);
  res.json("Se ha borrado la orden");
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
