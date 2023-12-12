const Product = require("../models/Product");
const Buyer = require("../models/Buyer");
const Order = require("../models/Order");
const _ = require("lodash");

module.exports = async () => {
  try {
    const buyers = await Buyer.find();
    const products = await Product.find();
    const orderSeeder = [];
    let arr = [];
    let totalvalue = 0;

    for (const buyer of buyers) {
      const numberOfProducts = _.random(3, 10);

      let selectedProducts = _.sampleSize(products, numberOfProducts);
      for (let product of selectedProducts) {
        arr.push({ item: product, qty: 1, total: product.price * 1 });
      }
      totalvalue = 0;
      for (const item of arr) {
        totalvalue += item.item.price* item.qty;
      }

      const newOrder = new Order({
        buyer: buyer._id,
        items: arr,
        state: "Pending",
        totalValue: totalvalue,
      });
      arr = [];
      buyer.orders.push(newOrder);
      orderSeeder.push(newOrder);
      await buyer.save();
    }

    await Order.insertMany(orderSeeder);
    console.log("[Database] Se corrió el seeder de ordenes.");
  } catch (error) {
    console.error("Error al ejecutar el seeder de Ordenes:", error);
  }
};
