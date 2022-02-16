const path = require("path");
const express = require("express");
const db = require("./data/database");

const danceRoutes = require("./routes/dancing.routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(danceRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});

app.use((error, req, res, next) => {
  res.status(500).render("500");
});

db.connectToDatabase().then(() => {
  app.listen(3000);
});
