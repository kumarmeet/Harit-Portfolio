const Visitor = require("../model/visitor");

const { body, validationResult } = require("express-validator");

const welcome = (req, res) => {
  res.render("hero-page");
};

const home = (req, res) => {
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
};

const about = (req, res) => {
  res.render("about");
};

const portfolio = (req, res) => {
  const galleries = [];

  for (let i = 1; i <= 20; i++) {
    galleries.push(`img-pf_${i}`);
  }

  res.render("portfolio", { galleries: galleries });
};

const contact = (req, res) => {
  res.render("contact");
};

const postContact = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    console.log(error);
    return res.json({ message: "Error" });
  }

  const visitor = {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    gender: req.body.gender,
    age: req.body.age,
    city: req.body.city,
    pincode: req.body.pincode,
    comment: req.body.comment,
  };

  const visitorData = new Visitor(
    visitor.name,
    visitor.email,
    visitor.mobile,
    visitor.gender,
    visitor.age,
    visitor.city,
    visitor.pincode,
    visitor.comment
  );

  await visitorData.save();

  res.redirect("/home");
};

module.exports = {
  welcome: welcome,
  home: home,
  about: about,
  portfolio: portfolio,
  contact: contact,
  postContact: postContact,
};
