const express = require("express");
const app = express();
const con = require("./database.js");
const bodyParser = require("body-parser");
const alert = require('alert'); 

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var data;
var data2;

var breakfastmenu, lunchmenu, dinnermenu, dessertmenu, drinksmenu;
var bookingavailable, bid;

app.get("/hello", (req, res) => {

   let select = "select bf.ItemName,bf.Amount,bf.Details,lc.ItemName,lc.Amount,lc.Details,dn.ItemName,dn.Amount,dn.Details,ds.ItemName,ds.Amount,ds.Details,dr.ItemName,dr.Amount,dr.Details ";
   let from = "from breakfast bf, lunch lc, dinner dn, dessert ds, drinks dr,todaymenu tm ";
   let where = "where (bf.idBreakfast = tm.idBreakfast) And (lc.idlunch = tm.idlunch) AND (dn.iddinner = tm.iddinner) AND (ds.iddessert = tm.iddessert) AND (dr.idDrinks = tm.idDrinks);";
   let sql = select + from + where;
   // let sql = "select bf.ItemName, bf.Amount, bf.Details, lc.ItemName, lc.Amount, lc.Details, dn.ItemName, dn.Amount, dn.Details, ds.ItemName, ds.Amount, ds.Details, dr.ItemName, dr.Amount, dr.Details from breakfast bf, lunch lc, dinner dn, dessert ds, drinks dr, todaymenu tm where (tm.idBreakfast = bf.idBreakfast) AND (tm.idlunch = lc.idlunch ) AND (tm.iddinner = dn.iddinner) AND (tm.iddessert = ds.iddessert) AND (tm.idDrinks = dr.idDrinks)";

  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  })

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

app.post("/page-contacts", (req, res) => {
  const a = req.body.fname;
  const b = req.body.lname;
  const c = req.body.email;
  const d = req.body.phone;
  const e = req.body.message;

  var sql = `INSERT INTO contactus (FirstName,LastName,Email,Phone,Message)
   VALUES ("${a}", "${b}", "${c}", "${d}", "${e}")`;

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("page-contacts");
    }
  });
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
      breakfastmenu = result;
      // console.log(result);
    }
  });

  let sql2 = "SELECT * from Lunch";
  con.query(sql2, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      lunchmenu = result;
      //  console.log(result);
    }
  });

  let sql3 = "SELECT * from Dinner";

  con.query(sql3, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      dinnermenu = result;
      //  console.log(result);
    }
  });

  let sql4 = "SELECT * from Dessert";

  con.query(sql4, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      dessertmenu = result;
      //  console.log(result);
    }
  });

  let sql5 = "SELECT * from Drinks";

  con.query(sql5, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      drinksmenu = result;
      //  console.log(result);
    }
  });

  res.render("menu-grid", {
    BreakfastMenu: breakfastmenu,
    LunchMenu: lunchmenu,
    DinnerMenu: dinnermenu,
    DessertMenu: dessertmenu,
    DrinksMenu: drinksmenu,
  });
});

app.get("/page-book-table", (req, res) => {
  let sql4 = "SELECT * from BOOKINGAVAILABLE";

  con.query(sql4, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      bookingavailable = result;
    }
  });

  res.render("page-book-table", { BookingAvailable: bookingavailable, ReservationFlag: 0 });
});

app.post("/page-book-table-", (req, res) => {
  var people = req.body.people;
  var date = req.body.day;
  var time = req.body.time + " PM";
  
  console.log(` "${people}" "${date}" "${time}" `);
 

  var test = `select idBookingAvailable from bookingavailable where BDate = "${date}" AND BTime = "${time}" AND NoOfPeople = "${people}" `;

  con.query(test, (err, result) => {
    if (err) {
      console.log(err);
    } else {
    
      if(result!=null){

      bid = result[0].idBookingAvailable;
      console.log(bid);
      
      var test1 = `Delete from bookingavailable where idBookingAvailable = ${bid}`;

      con.query(test1,(err, result) => {
        if (err) {
          console.log(err);
        } else { 
         alert("Booking Confirmed");
          res.render("index");
        } 
    });


      }
    }
  });

 

  let sql4 = "SELECT * from BOOKINGAVAILABLE";

  con.query(sql4, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      bookingavailable = result;
     
    }
  });

   res.render("page-book-table", { BookingAvailable: bookingavailable, ReservationFlag: 1 });

  //res.redirect("/page-book-table");

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
