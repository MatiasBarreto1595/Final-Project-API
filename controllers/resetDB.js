require("dotenv").config();

async function runAllSeeders() {
  const { mongoose } = require("../db");
  await mongoose.connection.dropDatabase();

  await require("../seeders/CategorySeeder")();
  await require("../seeders/ProductSeeder")();
  await require("../seeders/BuyerSeeder")();
  await require("../seeders/OrderSeeder")();
  await require("../seeders/AdminSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
}

module.exports = {
  runAllSeeders,
};
