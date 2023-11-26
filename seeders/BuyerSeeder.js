const Buyer = require("../models/Buyer");
const bcrypt = require("bcryptjs");
module.exports = async () => {
  try {
    const hashedPassword = await bcrypt.hash("1234", 8);

    const buyers = [
      {
        firstname: "Julio",
        lastname: "Rios",
        email: "julio.rios@gmail.com",
        direction: "Juncal 2123",
        phone: "098989898",
        password: hashedPassword,
      },
      {
        firstname: "Mauro",
        lastname: "Perez",
        email: "mauro.perez@gmail.com",
        direction: "25 de Agosto 2550",
        phone: "096545454",
        password: hashedPassword,
      },
      {
        firstname: "Tere",
        lastname: "Lopez",
        email: "tere.lopez@gmail.com",
        direction: "Paullier 987",
        phone: "097878787",
        password: hashedPassword,
      },
      {
        firstname: "Rodrigo",
        lastname: "Luzardo",
        email: "rodrigo.luzardo@gmail.com",
        direction: "Herrera 202",
        phone: "095656565",
        password: hashedPassword,
      },
      {
        firstname: "Matias",
        lastname: "Barreto",
        email: "matias.barreto1998@gmail.com",
        direction: "Benito Blanco 995",
        phone: "098251410",
        password: hashedPassword,
      },
      {
        firstname: "Juan",
        lastname: "Alvez",
        email: "juan.alvez@gmail.com",
        direction: "21 de setiembre 1221",
        phone: "098585858",
        password: hashedPassword,
      },
    ];

    const buyersSeeder = [];
    for (const buyer of buyers) {
      const newBuyer = new Buyer(buyer);
      buyersSeeder.push(newBuyer);
    }

    await Buyer.insertMany(buyersSeeder);
    console.log("[Database] Se corrió el seeder de Compradores.");
  } catch (error) {
    console.error("Error al ejecutar el seeder de Compradores:", error);
  }
};
