const Category = require("../models/Category");
const Admin = require("../models/Admin");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const Product = require("../models/Product");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);


// Display a listing of the resource.
async function index(req, res) {
  const categories = await Category.find().populate("products");
  return res.json(categories);
}

// Display the specified resource.
async function show(req, res) {
  const category = await Category.findOne({ _id: req.params.id }).populate("products");

  res.json({ category });
}

//STORE//
async function store(req, res) {
  try {
    let admin;

    if (req.auth.sub) {
      admin = await Admin.findById(req.auth.sub);

      if (!admin) {
        return res.json({ msg: "Not logged in" });
      }
    } else {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const form = formidable({
      multiples: true,
      keepExtensions: true,
      /* uploadDir: __dirname + "/../public/img", */
    });

    form.parse(req, async (err, fields, files) => {
      const ext = path.extname(files.image.filepath);
      const newFileName = `image_${Date.now()}${ext}`;

      const { data, error } = await supabase.storage
        .from("img") // ("nombre del bucket")
        .upload(newFileName, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
          duplex: "half",
        });

      try {
        const { name } = fields;

        const newCategory = await Category.create({
          name,
          image: newFileName,
        });
        res.json(newCategory);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error interno del servidor" });
      }

    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    let admin;
    admin = await Admin.findById(req.auth.sub);
    if (!admin) {
      return res.json({ msg: "Not logged in" });
    } else {
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
    }
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  let admin;
  admin = await Admin.findById(req.auth.sub);
  if (!admin) {
    return res.json({ msg: "Not logged in" });
  } else {
   const categoryToRemove = await Category.findById(req.params.id);
    await Product.deleteMany({category: categoryToRemove._id});
    await Category.findByIdAndRemove(req.params.id);
    res.json("Se ha borrado la categoría");
  }
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
