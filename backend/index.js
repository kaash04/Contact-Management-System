const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Requests

// add contact
app.post("/contacts", async (req, res) => {
  const { phoneNumber, email } = req.body;
  const existingContact = await User.findOne({
    $or: [{ phoneNumber }, { email }],
  });
  if (existingContact)
    return res.status(400).json({
      message: "Contact with this phone number or email already exists",
    });
  const newContact = new User(req.body);
  await newContact.save();
  res.json(newContact);
});

// search contacts
app.get("/search/:info", async (req, res) => {
  try {
    const contact = await User.findOne({
      $or: [{ name: req.params.info }, { email: req.params.info }],
    });
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// retrieve all contacts
app.get("/contacts", async (req, res) => {
  const contacts = await User.find();
  res.json(contacts);
});

// update contact
app.put("/contacts/:id", async (req, res) => {
  try {
    const updatedContact = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updatedContact);
  } catch {
    return res.status(400).json({ message: "Unable to Update Contact" });
  }
});

// delete contact
app.delete("/contacts/:id", async (req, res) => {
  try {
    const deletedContact = await User.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Delete Contact Failed", error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
