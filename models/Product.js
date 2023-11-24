const { mongoose, Schema } = require("../db");
// Crear esquema y modelo Product...
const productSchema = new Schema({
  name: String,
  description: String,
  ingredients: String,
  image: Array,
  price: Number,
  stock: Number,
  category: {type: Schema.Types.ObjectId, ref: "Category"},
  bestSeller: Boolean,
  slug: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
