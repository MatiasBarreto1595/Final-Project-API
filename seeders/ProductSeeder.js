const Product = require("../models/Product");
const Category = require("../models/Category");
const products = require("./productData");

module.exports = async () => {
  const JuiceCategory = await Category.findOne({ name: "juices" });
  const SparklingTonicsCategory = await Category.findOne({ name: "sparkling-tonics" });
  const NutMilkSmoothiesCategory = await Category.findOne({ name: "nut-milks-&-smoothies" });
  const ElixirsCategory = await Category.findOne({ name: "elixirs" });

  const productsSeeder = [];
  const categoriesNamesDb = [
    "JuiceCategory",
    "SparklingTonicsCategory",
    "NutMilkSmoothiesCategory",
    "ElixirsCategory",
  ];
  const categoriesNames = ["juices", "sparklingTonics", "nutMilkSmoothies", "elixirs"];

  for (let i = 0; i < 4; i++) {
    for (const productData of products[categoriesNames[i]]) {
      productData.category = eval(categoriesNamesDb[i])._id;
      const newProduct = new Product(productData);
      eval(categoriesNamesDb[i]).products.push(newProduct);
      productsSeeder.push(newProduct);
      await eval(categoriesNamesDb[i]).save();
    }
  }

  await Product.insertMany(productsSeeder);
  console.log("[Database] Se corrió el seeder de products.");
};
