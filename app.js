const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

app.get("/home", (req, res) => {
  res.send("This is the Home page.");
});

app.get("/contact", (req, res) => {
  res.send("This is the Contact page.");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
