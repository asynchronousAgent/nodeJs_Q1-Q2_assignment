const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/Users");
const UsersProfile = require("./models/UsersProfile");

mongoose
  .connect("mongodb://localhost:27017/excellenceuserprofile")
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log(err));
const obj = [
  {
    firstname: "Vishal",
    lastname: "Ghosh",
    email: "vishal@gmail.com",
    password: "hellovish",
  },
  {
    firstname: "Saugata",
    lastname: "Shee",
    email: "saugata@gmail.com",
    password: "hellosau",
  },
  {
    firstname: "Sukalyan",
    lastname: "Makal",
    email: "makal@gmail.com",
    password: "hellomakal",
  },
  {
    firstname: "Souvik",
    lastname: "Alu",
    email: "alu@gmail.com",
    password: "helloalu",
  },
  {
    firstname: "Raktim",
    lastname: "Bhowmik",
    email: "raktim@gmail.com",
    password: "helloraktim",
  },
];

const obj2 = [
  {
    dob: new Date(1997, 08, 28),
    mobile_no: 5648721499,
  },
  {
    dob: new Date(1997, 01, 27),
    mobile_no: 5648761489,
  },
  {
    dob: new Date(1997, 09, 04),
    mobile_no: 5642721489,
  },
  {
    dob: new Date(1997, 05, 04),
    mobile_no: 5648521489,
  },
  {
    dob: new Date(1998, 03, 23),
    mobile_no: 5638721489,
  },
];
let usersRec = [];
let usersProfile = [];
for (let i = 0; i < obj.length; i++) {
  obj[i].password = bcrypt.hashSync(obj[i].password, 10);
  let newUSer = new User(obj[i]);
  newUSer
    .save()
    .then((resolve) => console.log(`User ${i} saved`))
    .catch((err) => console.log(err));
  usersRec.push(newUSer);
}

if (usersRec.length == 5) {
  for (let j = 0; j < obj2.length; j++) {
    obj2[j]["user_id"] = usersRec[j]["_id"];
    let newProfile = new UsersProfile(obj2[j]);
    newProfile
      .save()
      .then((resolve) => console.log(`Profile ${j} saved`))
      .catch((err) => console.log(err));
    usersProfile.push(newProfile);
  }
}

console.log(usersRec);
console.log(usersProfile);
