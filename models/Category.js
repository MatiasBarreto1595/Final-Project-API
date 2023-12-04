const { mongoose, Schema } = require("../db");
const beautifyUnique = require("mongoose-beautiful-unique-validation");

const categorySchema = new Schema({
  name: { type: String, unique: true },
  image: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

categorySchema.plugin(beautifyUnique);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

// Crear esquema y modelo Admin...
