const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const hashedPassword = await bcrypt.hash("1234", 8);
  const adminSeeder = [];
  const newAdmin = new Admin({
    firstname: "admin",
    lastname: "admin",
    email: "admin@admin.admin",
    password: hashedPassword,
  });

  const newAdmin2 = new Admin({
    firstname: "Dwayne",
    lastname: "Johnson",
    email: "laroca@laroca.laroca",
    password: hashedPassword,
  });

  const newAdmin3 = new Admin({
    firstname: "LeBron",
    lastname: "James",
    email: "LeBron@Raymone.James",
    password: hashedPassword,
  });
  adminSeeder.push(newAdmin);
  adminSeeder.push(newAdmin2);
  adminSeeder.push(newAdmin3);
  await Admin.insertMany(adminSeeder);
  console.log("[Database] Se corrió el seeder de Administrador.");
};
