const express = require("express");
const path = require("path");

const port = process.env.port || 8080;
const app = express();

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(module.path, "/public/index.html"));
});
app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(module.path, "/public/about.html"));
});
app.get("/contact-me", (req, res) => {
  res.status(200).sendFile(path.join(module.path, "/public/contact-me.html"));
});
app.get("/*", (req, res) => {
  res.status(200).sendFile(path.join(module.path, "/public/404.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
