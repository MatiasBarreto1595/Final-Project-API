const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");
const authRoutes = require("./authRoutes");
const adminRoutes = require("./adminRoutes");
const buyerRoutes = require("./buyerRoutes");
const resetDBRoutes = require("./resetDBRoutes");
module.exports = (app) => {
  /**
   * Notar que si el sitio está en español, tiene sentido que las URLs que se
   * ven en la barra de direcciiones del navegador también lo estén. No así los
   * nombres de variables, funciones, etc, que siempre se recomienda que estén
   * en inglés.
   */
  // app.use("/", publicRoutes);
  app.use("/", authRoutes);
  app.use("/order", orderRoutes);
  app.use("/product", productRoutes);
  app.use("/category", categoryRoutes);
  app.use("/buyer", buyerRoutes);
  app.use("/admin", adminRoutes);
  app.use("/resetdb", resetDBRoutes);
};
