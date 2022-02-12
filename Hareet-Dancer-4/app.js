const path = require("path");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("hero-page");
});

app.get("/home", (req, res) => {
  const icons = [
    {
      url: "https://img.icons8.com/external-photo3ideastudio-gradient-photo3ideastudio/64/000000/external-dance-home-activity-photo3ideastudio-gradient-photo3ideastudio.png",
      title: "Free Style Dance",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque in rerum eius est quia accusantium commodi saepe natus.",
    },
    {
      url: "https://img.icons8.com/external-two-tone-chattapat-/64/000000/external-dance-party-and-celebration-two-tone-chattapat-.png",
      title: "Party Dance",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque in rerum eius est quia accusantium commodi saepe natus.",
    },
    {
      url: "https://img.icons8.com/external-fill-outline-pongsakorn-tan/64/000000/external-dancer-nightlife-fill-outline-pongsakorn-tan.png",
      title: "Western Dance Style",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque in rerum eius est quia accusantium commodi saepe natus.",
    },
  ];

  res.render("home-page", { icons: icons });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/portfolio", (req, res) => {
  const galleries = [];

  for (let i = 1; i <= 20; i++) {
    galleries.push(`img-pf_${i}`);
  }

  res.render("portfolio", { galleries: galleries });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(3000);
