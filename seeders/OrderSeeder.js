const Product = require("../models/Product");
const Buyer = require("../models/Buyer");
const Order = require("../models/Order");
const _ = require("lodash");

module.exports = async () => {
  try {
    const buyers = await Buyer.find();
    const products = await Product.find();
    const orderSeeder = [];

    for (const buyer of buyers) {
      const numberOfProducts = _.random(3, 10);

      const selectedProducts = _.sampleSize(products, numberOfProducts);

      const newOrder = new Order({
        buyer: buyer._id,
        items: selectedProducts.map((product) => product._id),
        state: "Pending",
      });

      orderSeeder.push(newOrder);
    }

    await Order.insertMany(orderSeeder);
    console.log("[Database] Se corrió el seeder de ordenes.");
  } catch (error) {
    console.error("Error al ejecutar el seeder de Ordenes:", error);
  }
};
