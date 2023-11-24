/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 *
 */

const { fakerES: faker } = require("@faker-js/faker");
const User = require("../models/User");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const users = [];
  const urlImage =
    "https://media.istockphoto.com/id/1313958250/es/vector/icono-de-perfil-de-avatar-de-usuario-ilustraci%C3%B3n-vectorial-negra-sobre-fondo-transparente.jpg?s=1024x1024&w=is&k=20&c=EMjCflR4NNfJVbUv-Tx8vHzd2J8Z3ZvdGEFz2cpyifw=";

  for (let i = 0; i < 20; i++) {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const hashedPassword = await bcrypt.hash("1234", 8);
    users.push({
      firstname: firstname,
      lastname: lastname,
      username: faker.internet.userName(),
      email: faker.internet.email({ firstName: firstname, lastName: lastname }),
      perfilimage: urlImage,
      bio: faker.lorem.text(10),
      tweets: [],
      password: hashedPassword,
    });
  }
  await User.insertMany(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
