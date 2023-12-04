const { mongoose, Schema } = require("../db");
const beautifyUnique = require("mongoose-beautiful-unique-validation");

// Crear esquema y modelo Buyer...
const buyerSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, required: true, unique: true },
  direction: String,
  phone: String,
  password: String,
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

buyerSchema.plugin(beautifyUnique);

const Buyer = mongoose.model("Buyer", buyerSchema);

module.exports = Buyer;
