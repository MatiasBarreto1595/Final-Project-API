const { mongoose, Schema } = require("../db");
// Crear esquema y modelo Buyer...
const buyerSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  direction: String,
  phone: String,
  password: String,
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

const Buyer = mongoose.model("Buyer", buyerSchema);

module.exports = Buyer;
