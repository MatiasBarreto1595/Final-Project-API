const Admin = require("../models/Admin");

module.exports = async () => {
  const adminSeeder = [];
  const newAdmin = new Admin({
    firstname: "Dwayne ",
    lastname: "Johnson",
    email: "laroca@laroca.laroca",
    password: "laroca123",
  });
  adminSeeder.push(newAdmin);
  await Admin.insertMany(adminSeeder);
  console.log("[Database] Se corrió el seeder de Administrador.");
};
