const { mongoose, Schema } = require("../db");

const categorySchema = new Schema({
  name: String,
  image: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

// Crear esquema y modelo Admin...
