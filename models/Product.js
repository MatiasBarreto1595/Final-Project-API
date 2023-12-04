const { mongoose, Schema } = require("../db");
const beautifyUnique = require("mongoose-beautiful-unique-validation");

// Crear esquema y modelo Product...
const productSchema = new Schema({
  name: { type: String, unique: true },
  description: String,
  ingredients: String,
  image: Array,
  price: Number,
  stock: Number,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  bestSeller: Boolean,
  slug: String,
});

productSchema.plugin(beautifyUnique);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
