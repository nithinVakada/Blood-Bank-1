const express = require("express");
require("./controllers/config/dbconnect");
const app = express();
const User = require("./models/user.js");
const Bank=require("./models/banks.js")
app.use(express.json());
const methodOverride = require("method-override");
const cookieparser = require("cookie-parser");
app.use(cookieparser());
app.use(express.static(__dirname, +"/public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");


app.get("/register", async (req, res) => {
  console.log("Welcome to home page");
  res.render("register");
});

app.get("/", async (req, res) => {
  res.render("homepage");
  //res.json("home");
});

app.post("/register", async (req, res) => {
  const {
    name,
    age,
    gender,
    bloodgroup,
    phonenumber,
    email,
    state,
    city,
    WillDonate,
    password,
  } = req.body;

  const user = await User.create({
    name,
    age,
    gender,
    bloodgroup,
    phonenumber,
    email,
    state,
    city,
    WillDonate,
    password,
  });

  try {
    res.render("homepage");
  } catch {
    console.log(error);
  }
});

app.get("/login", async (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let isLogin = false;
  console.log(req.body);
  const { email, password } = req.body;
  const UserFound = await User.findOne({ email });
  if (!UserFound) {
    return res.json("Invalid login credentials");
    alert("Invalid login credentials");
  }
  if (password !== UserFound.password) {
    return res.json("Invalid login credentials");
  }
  res.cookie("email", UserFound.email);
  res.cookie("password", UserFound.password);
  isLogin = true;
  // let id=req.params.id
  try {
    res.redirect(`/profile/${UserFound._id}`);
    //res.render("homepage");
    //res.json("Success");
  } catch (err) {
    console.log(err);
  }
});

app.get("/logout", async (req, res) => {
  let isLogin = false;
  res.render("homepage", { isLogin });
});

app.get("/profile/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  //console.log("Sucess")
  res.render("profile", { user });
});
app.get("/update/profile", async (req, res) => {
  res.redirect("/");
});
app.get("/profile", async (req, res) => {
  res.render("profile");
});

app.get("/dosearch", async (req, res) => {
  res.render("dosearch");
});

app.post("/dosearch", async (req, res) => {
  const { bloodgroup, city } = req.body;
  const datas = await User.find({ bloodgroup, city, WillDonate: "Yes" });
  res.render("donorslist", { UserList: datas });
});

app.get("/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    console.log("jgh");
    console.log("sum");
    res.render("UpdateUser", { user });
    //res.json("Updated");
  } catch (error) {
    console.log(error);
    //res.json(error);
  }
});
app.post("/:id", async (req, res) => {
  const id = req.body.id;
  console.log(id);
});
app.put("/update/:id", async (req, res) => {
  try {
    const { name, email, _id } = req.body;
    console.log(req.body);
    await User.findByIdAndUpdate(
      _id,
      {
        name,
        email,
      },
      {
        new: true,
      }
    );
    console.log(email);
    // const user=User.findOne({email});
    //console.log(user);
    //console.log("heeww");
    // res.redirect(`/profile/${useers._id}`);
    // res.render("homepage");
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(8100, console.log("Server is running"));
