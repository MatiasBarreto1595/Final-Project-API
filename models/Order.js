const { mongoose, Schema } = require("../db");

const orderSchema = new Schema({
  buyer: { type: Schema.Types.ObjectId, ref: "User" },
  items: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  state: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

// Crear esquema y modelo Order...
