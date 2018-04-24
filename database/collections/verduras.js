const mongoose = require("../connect");
var userSchema = {
  name : String,
  descripcion : String,
  incrediente : String
};
var verduras = mongoose.model("verduras", userSchema);
module.exports = verduras;
