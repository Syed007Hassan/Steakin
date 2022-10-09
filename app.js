const express = require("express");
const app = express();
const con = require("./database.js");

app.set("view engine", "ejs");

app.use(express.static("public"));

var data;
var data2;

app.get("/database", (req, res) => {});

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/index.html");
  res.render("index");
});

app.get("/page-about", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");
  res.render("page-about");
});

app.get("/home", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");
  res.render("index");
});

app.get("/page-chefs", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");
  let sql = "SELECT idChefs,FName, LName FROM CHEFS";

  // con.query(
  //   'INSERT INTO USERS (fName,lName) VALUES ("cr","7")',
  //   (err, result) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //   }
  // );

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // res.send(result);
      data = result;
      data2 = data[0].FName;
      console.log(data2);
    }
  });

  res.render("page-chefs", { Chefname: data2 });
});

app.get("/page-contacts", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");
  res.render("page-contacts");
});

app.get("/page-faqs", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");
  res.render("page-faqs");
});

app.get("/menu-grid", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");
  res.render("menu-grid");
});

app.get("/page-book-table", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");
  res.render("page-book-table");
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);

  con.connect((err) => {
    if (err) {
      console.log("Error connecting to Db");
      return;
    }
    console.log("Connected!");
  });
});
