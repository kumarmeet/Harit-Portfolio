const mongoDB = require("mongodb");
const ObjectID = mongoDB.ObjectId;

const db = require("../data/database");

class Visitor {
  constructor(name, email, mobile, gender, age, city, pincode, comment) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.gender = gender;
    this.age = age;
    this.city = city;
    this.pincode = pincode;
    this.comment = comment;
    // this.id = id;
  }

  async save() {
    const data = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      gender: this.gender,
      age: this.age,
      city: this.city,
      pincode: this.pincode,
      comment: this.comment,
    };

    const visitor = await db.getDb().collection("visitors").insertOne(data);
    return visitor;
  }
}

module.exports = Visitor;
