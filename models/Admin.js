const { mongoose, Schema } = require("../db");
const beautifyUnique = require("mongoose-beautiful-unique-validation");

const adminSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, required: true, unique: true },
  password: String,
});

adminSchema.plugin(beautifyUnique);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

// Crear esquema y modelo Admin...
