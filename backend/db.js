const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/crm")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.log("DB Connect error: " + err);
    process.exit(1);
  });

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  jobTitle: {
    type: String,
    trim: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
