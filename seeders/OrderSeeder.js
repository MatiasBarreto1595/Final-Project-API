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

    for (const buyer of buyers) {
      const numberOfProducts = _.random(3, 10);
      const otherRandomNumber = _.random(0, products.length);

      for (let product of products) {
        arr.push({ item: product, qty: 1, total: product.price * 1 });
      }

      // let selectedProducts = _.sampleSize(products, numberOfProducts);
      // for (let selectedProduct of selectedProducts) {
      //   selectedProduct.qty = 1;
      //   console.log(selectedProduct);
      //   await selectedProduct.save();
      // }
      const newOrder = new Order({
        buyer: buyer._id,
        items: arr,
        state: "Pending",
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
