const Product = require("../models/Product");
const Category = require("../models/Category");
const formidable = require("formidable");
const products = require("../seeders/productData");
// Display a listing of the resource.
async function index(req, res) {
  const categories = await Category.find().populate("products");
  return res.json(categories);
}

// Display the specified resource.
async function show(req, res) {
  const category = await Category.findOne({ name: req.params.name }).populate("products");

  res.json({ category });
}

async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    try {
      const { name, products } = fields;

      const existingCategory = await Category.findOne({ name });

      if (existingCategory) {
        return res.status(400).json({ error: "La categoría ya existe" });
      }
      const newProducts = JSON.parse(products);

      const newCategory = await Category.create({
        name,
        image: files.image.newFilename,
        products: newProducts,
      });

      res.json(newCategory);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
}

// Update the specified resource in storage.
async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    try {
      const category = await Category.findById(req.params.id);

      if (!category) {
        return res.status(404).json({ error: "Categoría no encontrada" });
      }

      const { name } = fields;

      category.name = name;

      if (files.image && files.image.size > 0) {
        category.image = files.image.newFilename;
      }

      await category.save();

      res.json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  await Category.findByIdAndRemove(req.params.id);
  res.json("Se ha borrado la categoria");
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
