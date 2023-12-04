const Category = require("../models/Category");
const products = require("./ProductSeeder.js");

module.exports = async () => {
  const categories = [
    {
      name: "juices",
      image: "https://juiceshop.com/cdn/shop/files/Juice-2_1600x.png?v=1674444624",
      products: [],
    },
    {
      name: "elixirs",
      image: "https://juiceshop.com/cdn/shop/files/Juice-2_1600x.png?v=1674444624",
      products: [],
    },
    {
      name: "nut milks & smoothies",
      image: "https://juiceshop.com/cdn/shop/files/Juice-2_1600x.png?v=1674444624",
      products: [],
    },
    {
      name: "sparkling tonics",
      image: "https://juiceshop.com/cdn/shop/files/Juice-2_1600x.png?v=1674444624",
      products: [],
    },
  ];

  const categoriesSeeder = [];
  for (const category of categories) {
    const newCategory = new Category(category);
    categoriesSeeder.push(newCategory);
  }

  await Category.insertMany(categoriesSeeder);
  console.log("[Database] Se corrió el seeder de Categorias.");
};
