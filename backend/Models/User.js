const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // or bcrypt
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: {
    type: String,
    required: true,
  },
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
