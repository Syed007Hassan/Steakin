const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

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
  res.render("page-chefs");
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

});