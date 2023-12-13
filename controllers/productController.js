const Product = require("../models/Product");
const Category = require("../models/Category");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const { el } = require("date-fns/locale");

// Display a listing of the resource.
async function index(req, res) {
  const products = await Product.find().populate("category");
  return res.json(products);
}

// Display the specified resource.
async function show(req, res) {
  const product = await Product.findById(req.params.id).populate("category");
  return res.json(product);
}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    /* uploadDir: __dirname + "/../public/img", */
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const ext = path.extname(files.image.filepath);
    const newFileName = `image_${Date.now()}${ext}`;
    

    const { data, error } = await supabase.storage
      .from("img")
      .upload(newFileName, fs.createReadStream(files.image.filepath), {
        cacheControl: "3600",
        upsert: false,
        contentType: files.image.mimetype,
        duplex: "half",

      });

    const { name, description, ingredients, price, stock, category, bestSeller } = fields;
    let slug = name.trim().toLowerCase().replace(/\s+/g, "-");

    await Product.create({
      name,
      description,
      ingredients,
      image: newFileName,
      price,
      stock,
      category: category,
      bestSeller,
      slug,
    });

    const product = await Product.findOne({ name: name });
    await Category.findByIdAndUpdate(product.category, { $push: { products: product } });

    res.json("Producto creado");
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
    const imagenes = [];
    const product = await Product.findById(req.params.id);

    for (let i = 0; i < product.image.length; i++) {
      const currentImage = Object.keys(files)[i];
      if (files[currentImage].size === 0) {
        imagenes.push(product.image[i]);
      } else {
        imagenes.push(files[currentImage].newFilename);
      }
    }

    const { name, description, ingredients, price, stock, category, bestSeller } = fields;
    let slug = name.trim().toLowerCase().replace(/\s+/g, "-");
    const category1 = await Category.findOne({ name: category });

    await Product.findByIdAndUpdate(req.params.id, {
      name,
      description,
      ingredients,
      image: imagenes,
      price,
      stock,
      category: category ? category1 : product.category,
      bestSeller,
      slug,
    });

    await product.save();
    const product1 = await Product.findById(req.params.id);
    res.json(product1);
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const product = await Product.findById(req.params.id);
  await Category.findByIdAndUpdate(product.category, { $pull: { products: req.params.id } });
  await Product.findByIdAndRemove(req.params.id);
  res.json("Se ha borrado el producto");
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
