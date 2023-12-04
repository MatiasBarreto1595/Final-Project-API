const { mongoose, Schema } = require("../db");

const orderSchema = new Schema({
  buyer: { type: Schema.Types.ObjectId, ref: "Buyer" },
  items: Array,
  state: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

// Crear esquema y modelo Order...
