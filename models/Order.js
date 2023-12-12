const { mongoose, Schema } = require("../db");

const orderSchema = new Schema(
  {
    buyer: { type: Schema.Types.ObjectId, ref: "Buyer" },
    items: Array,
    state: String,
    totalValue: Number,
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

// Crear esquema y modelo Order...
