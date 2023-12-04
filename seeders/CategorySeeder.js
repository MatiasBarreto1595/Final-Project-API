const Category = require("../models/Category");
const products = require("./ProductSeeder.js");

module.exports = async () => {
  const categories = [
    {
      name: "juices",
      image: "juices.PNG",
      products: [],
    },
    {
      name: "elixirs",
      image: "elixir0.png",
      products: [],
    },
    {
      name: "nut milks & smoothies",
      image: "proteina.PNG",
      products: [],
    },
    {
      name: "sparkling tonics",
      image: "can.png",
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
