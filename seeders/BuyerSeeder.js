const Buyer = require("../models/Buyer");

module.exports = async () => {
  const buyers = [
    {
      name: "Julio Rios",
      image:"https://juiceshop.com/cdn/shop/files/Juice-2_1600x.png?v=1674444624",
      products: [],
    },
    {
      name: "Diego Torres",
      image: "https://juiceshop.com/cdn/shop/files/Juice-2_1600x.png?v=1674444624",
      products: [],
    },
    {
      name: "Shakira Rodriguez",
      image: "https://juiceshop.com/cdn/shop/files/Juice-2_1600x.png?v=1674444624",
      products: [],
    },
    {
      name: "Miguelito Dos Santos",
      image: "https://juiceshop.com/cdn/shop/files/Juice-2_1600x.png?v=1674444624",
      products: [],
    },
  ];


const buyersSeeder = [];
for (const buyer of buyers) {
  const newBuyer = new Buyer(buyer);
  buyersSeeder.push(newBuyer);
}

await Buyer.insertMany(buyersSeeder);
console.log("[Database] Se corrió el seeder de Categorias.");
};