const express = require("express");
const app = express();
const con = require("./database.js");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false })) 

app.use(bodyParser.json());

var data;
var data2;

var breakfastmenu,lunchmenu,dinnermenu,dessertmenu,drinksmenu;
var bookingavailable = 0;

app.get("/hello", (req,res) =>{

  let sql = "SELECT * from Breakfast";
 
  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
    menu =  result;  
    // console.log(result);
    }
  });
  
  res.render("menu-grid", {Menu:menu});


});

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
  let sql = "SELECT * FROM CHEFS";

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
     
    }
  });


  res.render("page-chefs", { Chefname: data });
});

app.get("/page-contacts", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");
  res.render("page-contacts");
});

app.post("/page-contacts", (req,res) =>{

  const a = req.body.fname;
  const b = req.body.lname;
  const c = req.body.email;
  const d = req.body.phone;
  const e = req.body.message;

  var sql = `INSERT INTO contactus (FirstName,LastName,Email,Phone,Message)
   VALUES ("${a}", "${b}", "${c}", "${d}", "${e}")`;

   con.query(sql, (err,result) =>{
     if(err){
        console.log(err);
     }
     else{
   
      res.render("page-contacts");
     }
   })

});


app.get("/page-faqs", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");
  res.render("page-faqs");
});

app.get("/menu-grid", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");

  let sql = "SELECT * from Breakfast";
  
  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
    breakfastmenu =  result;  
    // console.log(result);
    }
  });

  let sql2 = "SELECT * from Lunch";
  con.query(sql2, (err, result) => {
    if(err){
      console.log(err);
    }else{  
    lunchmenu =  result;  
    //  console.log(result);
    }

  });
  
 let sql3 = "SELECT * from Dinner";

 con.query(sql3, (err, result) => {
  if(err){
    console.log(err);
  }else{  
    dinnermenu =  result;  
  //  console.log(result);
  }
 });

 let sql4 = "SELECT * from Dessert";

 con.query(sql4, (err, result) => {
  if(err){
    console.log(err);
  }else{  
    dessertmenu =  result; 
  //  console.log(result);
  }
 });

 let sql5 = "SELECT * from Drinks";

 con.query(sql5, (err, result) => { 
  if(err){
    console.log(err);
  }else{
    drinksmenu =  result;
  //  console.log(result);
  }
  });

  res.render("menu-grid", {BreakfastMenu:breakfastmenu, 
                           LunchMenu:lunchmenu, 
                           DinnerMenu:dinnermenu,
                           DessertMenu:dessertmenu,
                           DrinksMenu:drinksmenu});
                       
});

app.get("/page-book-table", (req, res) => {
  
  let sql4 = "SELECT * from BOOKINGAVAILABLE";

 con.query(sql4, (err, result) => {
  if(err){
    console.log(err);
  }else{  
    
    bookingavailable =  result;

  }
 });

  res.render("page-book-table",{BookingAvailable:bookingavailable});
});


app.post("/page-book-table", (req,res) =>{

  var people = req.body.people;
  var day = req.body.day;
  var time = req.body.time;

  console.log(day);

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
