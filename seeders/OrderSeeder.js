const Product = require("../models/Product");
const Buyer = require("../models/Buyer");
const Order = require("../models/Order");
const _ = require("lodash");

module.exports = async () => {
  try {
    const buyers = await Buyer.find();
    const products = await Product.find();
    const orderSeeder = [];

    // Iterar sobre cada comprador para crear órdenes
    for (const buyer of buyers) {
      // Generar un número aleatorio entre 3 y 10 para la cantidad de productos en la orden
      const numberOfProducts = _.random(3, 10);

      // Seleccionar productos aleatorios para la orden
      const selectedProducts = _.sampleSize(products, numberOfProducts);

      // Crear una nueva orden para el comprador con los productos seleccionados
      const newOrder = new Order({
        buyer: buyer._id,
        items: selectedProducts.map((product) => product._id),
        state: "Pending", // O el estado que prefieras
      });

      orderSeeder.push(newOrder);
    }

    await Order.insertMany(orderSeeder);
    console.log("[Database] Se corrió el seeder de ordenes.");
  } catch (error) {
    console.error("Error al ejecutar el seeder de Ordenes:", error);
  }
};
