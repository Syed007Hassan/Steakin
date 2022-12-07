import express from "express";
import alert from 'alert';
import bodyParser from "body-parser";
import con from "./database.js";
const app = express();
// const express = require("express");
// const bodyParser = require("body-parser");
// const con = require("./database.js");
// const alert = require('alert'); 


app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var data;
var data2;

var breakfastmenu, lunchmenu, dinnermenu, dessertmenu, drinksmenu;
var bookingavailable, bid;
var totalResults = [];

app.get("/hello", (req, res) => {


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
  let sql = "SELECT ch.FName, ch.LName, ch.Toc, sh.ShopName FROM chefs ch, shops sh WHERE ch.shopid = sh.idShops";

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
     
      data = result;
     
    }
  });

  res.render("page-chefs", { Chefname: data });
});

app.get("/allchefs", (req,res) => {
 
  let sql = "SELECT * from chefs";

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // res.send(result);
      res.send(result);
    }
  });

  

});

app.get("/page-shops", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");
  let sql = "SELECT * FROM shops";

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // res.send(result);
      data = result;
    }
  });

  res.render("page-shops", { Shopsname: data });
});

app.get("/page-contacts", (req, res) => {
  //res.sendFile(__dirname + "/page-about.html");
  res.render("page-contacts");
});

app.post("/page-contacts", (req, res) => {
  // const a = req.body.fname;
  // const b = req.body.lname;
  // const c = req.body.email;
  // const d = req.body.phone;
  // const e = req.body.message;

  const { fname, lname, email, phone, message } = req.body;

  let currentDate = new Date().toJSON().slice(0, 10);
 // console.log(currentDate);

  var sql = `INSERT INTO contactus (FirstName,LastName,Email,Phone,Message,date)
   VALUES ("${fname}", "${lname}", "${email}", "${phone}", "${message}", "${currentDate}")`;

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

  let sql = "select bf.ItemName,bf.Amount,bf.Details, ch.Fname from breakfast bf, chefs ch where (ch.idChefs = bf.idChefs);" ;

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      breakfastmenu = result;

    }
  });

  let sql2 = "select ln.ItemName,ln.Amount,ln.Details, ch.Fname from lunch ln, chefs ch where (ch.idChefs = ln.idChefs);" ;
  con.query(sql2, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      lunchmenu = result;
      //  console.log(result);
    }
  });

  let sql3 = "select dn.ItemName,dn.Amount,dn.Details, ch.Fname from dinner dn, chefs ch where (ch.idChefs = dn.idChefs);" ;

  con.query(sql3, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      dinnermenu = result;
      //  console.log(result);
    }
  });

  let sql4 = "select dsr.ItemName,dsr.Amount,dsr.Details, ch.Fname from dessert dsr, chefs ch where (ch.idChefs = dsr.idChefs);" ;

  con.query(sql4, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      dessertmenu = result;
      //  console.log(result);
    }
  });

  let sql5 = "select dr.ItemName,dr.Amount,dr.Details, ch.Fname from drinks dr, chefs ch where (ch.idChefs = dr.idChefs);" ;

  con.query(sql5, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      drinksmenu = result;
      //  console.log(result);
    }
  });

   sql = "select bf.ItemName,bf.Amount,bf.Details from breakfast bf, todaymenu tm where (bf.idBreakfast = tm.idBreakfast);"
  
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {

       totalResults.push(result[0]);
    }
  })

  sql = "select lu.ItemName,lu.Amount,lu.Details from lunch lu, todaymenu tm where (lu.idlunch = tm.idlunch);"
  
  con.query(sql, (err,result) => {
    if(err){
      console.log(err);
    }
    else{
      totalResults.push(result[0]);
    }
  });

  sql = "select di.ItemName,di.Amount,di.Details from dinner di, todaymenu tm where (di.iddinner = tm.iddinner);"

  con.query(sql, (err,result) => {
    if(err){
      console.log(err);
    }
    else{
      totalResults.push(result[0]);
    }
  });

  sql ="select de.Itemname,de.Amount,de.Details from dessert de, todaymenu tm where (de.iddessert = tm.iddessert);"

  con.query(sql, (err,result) => {  
    if(err){
      console.log(err);
    }
    else{
      totalResults.push(result[0]);
    }
  });

  sql = "select dr.ItemName,dr.Amount,dr.Details from drinks dr, todaymenu tm where (dr.idDrinks = tm.idDrinks);"
 
  con.query(sql,(err,result) => {
    if(err){
      console.log(err);
    }
    else{
      totalResults.push(result[0]);
    }
  });


  res.render("menu-grid", {
    BreakfastMenu: breakfastmenu,
    LunchMenu: lunchmenu,
    DinnerMenu: dinnermenu,
    DessertMenu: dessertmenu,
    DrinksMenu: drinksmenu,
    TodayMenu: totalResults
  });
});

app.get("/page-book-table", (req, res) => {
  let sql4 = "SELECT * from bookingavailable";

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
  var firstname = req.body.fname;
  var lastname = req.body.fname + " " + req.body.lname;
  var phone = req.body.phone;
  
   //console.log(` "${people}" "${date}" "${time}" "${firstname}" "${lastname}" "${phone}" `);
 

  var test = `select idBookingAvailable from bookingavailable where BDate = "${date}" AND BTime = "${time}" AND NoOfPeople = "${people}" `;

  con.query(test, (err, result) => {
    if (err) {
      console.log(err);
    } else {
       
      if(result!=null){

      bid = result[0].idBookingAvailable;
      // console.log(bid);
      
      var test1 = `Delete from bookingavailable where idBookingAvailable = ${bid}`;

      con.beginTransaction(function(err) {
        if (err) { con.rollback(); } 

      con.query(test1,(err, result) => {
        if (err) {
          console.log(err);
        } else { 

          var test2 = `INSERT INTO bookingsmadeh (idBookingAvailable,CName,CPhone,Date,Time) VALUES (${bid},"${lastname}","${phone}", "${date}", "${time}")`;
          
           con.query(test2, (err, result) => {
            if (err) {
              console.log(err);
            } else {
            con.commit();
            }
          });
         alert("Booking Confirmed");
          res.render("index");
        } 
    });

      });
      }
      
    }
  });

 

  let sql4 = "SELECT * from bookingavailable";

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

app.get("/page-admin", (req, res) => {

  res.render("page-admin",  { LoginFlag: 0 });
});

app.post("/page-admin", function (req, res) {
  const name = req.body.Name;
  const password = req.body.Pass;
  var x=0;
  var sql = `Select checkadmin("${name}","${password}")`;

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      
      x = result[0]["checkadmin(\""+name+"\",\""+password+"\")"];
      
      if(x == 1){
    res.render("admin-success");
  }
  else
  {
    res.render("page-admin", { LoginFlag: 1 });
  }

    }
  });

   
});

app.post("/page-admin-chefs", (req, res) => {
  var a = req.body.chefs;
//  console.log(a);
  if(a == "add"){
  res.render("page-modify-chefs", { add: 1, update:0, deletee:0 } );
  }
  if(a == "update"){
  res.render("page-modify-chefs",{add: 0, update:1, deletee:0});
  }
  if(a == "delete"){
  res.render("page-modify-chefs",{add: 0, update:0, deletee:1});
  }
  
  
});

app.post("/page-modify-chefs", (req, res) => {

  var type = req.body.modifychefs;
  console.log(type);

  if(type == "addchefs"){
  const a = req.body.chefid;
  const b = req.body.fname;
  const c = req.body.lname;
  const d = req.body.Toc;
  const e = req.body.shopid;

  // var sql = `INSERT INTO CHEFS (idChefs,FName,LName,Toc,shopid)
  //  VALUES ("${a}", "${b}", "${c}", "${d}", "${e}")`;

   var sql = `call AddChefs("${a}", "${b}", "${c}", "${d}", "${e}");`;

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("admin-success");
    }
  });

  }

  if(type == "updatechefs"){
    console.log(type);
    const a = req.body.chefid;
    const b = req.body.fname;
    const c = req.body.lname;
    const d = req.body.Toc;
    const e = req.body.shopid;
  
    // var sql1 = `UPDATE CHEFS SET FName = "${b}", LName = "${c}",
    // Toc = "${d}", shopid = "${e}" WHERE idChefs = "${a}"`;
    var sql1 = `call UpdateChefs("${a}", "${b}", "${c}", "${d}", "${e}");`;
    
    con.query(sql1, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin-success");
      }
    });

  }
 
  if(type == "deletechefs"){
    const a = req.body.chefid;
    // var sql2 = `DELETE FROM CHEFS WHERE idChefs = "${a}"`;

     var sql2 = `call DeleteChef("${a}");`;

    con.query(sql2, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin-success");
      }
    });

  }
 
});


app.post("/page-admin-reservation", (req, res) => {
  var a = req.body.reservation;
//  console.log(a);
    if(a == "add"){
  res.render("page-modify-reservation", { add: 1, update:0, deletee:0 } );
  }
  if(a == "update"){
  res.render("page-modify-reservation",{add: 0, update:1, deletee:0});
  }
  if(a == "delete"){
  res.render("page-modify-reservation",{add: 0, update:0, deletee:1});
  }
  
  
});

app.post("/page-modify-reservation", (req, res) => {

  var type = req.body.modifyreservation;
  //console.log(type);

  if(type == "addreservation"){
  const a = req.body.people;
  const b = req.body.day;
  const c = req.body.time;
 

  // var sql = `INSERT INTO bookingavailable (NoOfPeople,BDate,BTime) 
  // VALUES ("${a}", "${b}", "${c}");`;
  var sql = `call AddReservations("${a}", "${b}", "${c}");`;

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("admin-success");
    }
  });
   
}
if(type == "updatereservation"){
  const a = req.body.bookingid;
  const b = req.body.people;
  const c = req.body.day;
  const d = req.body.time;
 
  var sql =`Update bookingavailable set NoOfPeople = "${b}", BDate = "${c}", BTime = "${d}" where idBookingAvailable = "${a}"`;

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("admin-success");
    }
  });
   
}

if(type == "deletereservation"){
  const a = req.body.bookingid;
  var sql = `DELETE FROM bookingavailable WHERE idBookingAvailable = "${a}"`;
  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("admin-success");
    }
  });
}

});

app.post("/page-admin-breakfast", (req, res) => {
  var a = req.body.breakfast;
  // console.log(a);
  if(a == "add"){
  res.render("page-modify-breakfast", { add: 1, update:0, deletee:0 } );
  }
  if(a == "update"){
  res.render("page-modify-breakfast",{add: 0, update:1, deletee:0});
  }
  if(a == "delete"){
  res.render("page-modify-breakfast",{add: 0, update:0, deletee:1});
  }
  
  
});

app.post("/page-modify-breakfast", (req, res) => {
 
  var type = req.body.modifybreakfast;
  console.log(type);

  if(type == "addbreakfast"){
  const a = req.body.idbreakfast;
  const b = req.body.itemname;
  const c = req.body.amount;
  const d = req.body.details;
  const f = req.body.chefid;

  var sql = `INSERT INTO breakfast (idBreakfast,ItemName,Amount,Details,idChefs) 
  VALUES ("${a}", "${b}", "${c}", "${d}", "${f}");`;

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render("admin-success");
    }
  });

  }
  if(type == "updatebreakfast"){
    const a = req.body.idbreakfast;
    const b = req.body.itemname;
    const c = req.body.amount;
    const d = req.body.details;
    const f = req.body.chefid;
   
    var sql = `UPDATE breakfast SET ItemName = "${b}", Amount = "${c}", Details = "${d}", idChefs = "${f}" WHERE idBreakfast = "${a}"`;
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin-success");
      }
    });
     
  }

  if(type == "deletebreakfast"){
  
    const a = req.body.idbreakfast;

    var sql = `DELETE FROM breakfast WHERE idBreakfast = "${a}"`;
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin-success");
      }
    });


  }


});

  app.post("/page-admin-lunch", (req, res) => {
    var a = req.body.lunch;
    // console.log(a);
    if(a == "add"){
      res.render("page-modify-lunch", { add: 1, update:0, deletee:0 } );
      }
      if(a == "update"){
      res.render("page-modify-lunch",{add: 0, update:1, deletee:0});
      }
      if(a == "delete"){
      res.render("page-modify-lunch",{add: 0, update:0, deletee:1});
      }
    
  });

  app.post("/page-modify-lunch", (req, res) => {
 
    var type = req.body.modifylunch;
   // console.log(type);
  
    if(type == "addlunch"){
    const a = req.body.idlunch;
    const b = req.body.itemname;
    const c = req.body.amount;
    const d = req.body.details;
    const f = req.body.chefid;
  
    var sql = `INSERT INTO lunch (idlunch,ItemName,Amount,Details,idChefs) 
    VALUES ("${a}", "${b}", "${c}", "${d}", "${f}");`;
  
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin-success");
      }
    });
  
    }
    if(type == "updatelunch"){
    const a = req.body.idlunch;
    const b = req.body.itemname;
    const c = req.body.amount;
    const d = req.body.details;
    const f = req.body.chefid;

    var sql = `UPDATE lunch SET ItemName = "${b}", Amount = "${c}", Details = "${d}", idChefs = "${f}" WHERE idlunch = "${a}"`;
      con.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render("admin-success");
        }
      });
       
    }
  
    if(type == "deletelunch"){
    
      const a = req.body.idlunch;
  
      var sql = `DELETE FROM lunch WHERE idlunch = "${a}"`;
      con.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render("admin-success");
        }
      });
  
  
    }
  
  });


  app.post("/page-admin-dinner", (req, res) => {
    var a = req.body.dinner;
    // console.log(a);
    if(a == "add"){
      res.render("page-modify-dinner", { add: 1, update:0, deletee:0 } );
      }
      if(a == "update"){
      res.render("page-modify-dinner",{add: 0, update:1, deletee:0});
      }
      if(a == "delete"){
      res.render("page-modify-dinner",{add: 0, update:0, deletee:1});
      }
    
  });


  app.post("/page-modify-dinner", (req, res) => {
 
    var type = req.body.modifydinner;
    console.log(type);
  
    if(type == "adddinner"){
    const a = req.body.iddinner;
    const b = req.body.itemname;
    const c = req.body.amount;
    const d = req.body.details;
    const f = req.body.chefid;
  
    var sql = `INSERT INTO dinner (iddinner,ItemName,Amount,Details,idChefs) 
    VALUES ("${a}", "${b}", "${c}", "${d}", "${f}");`;
  
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin-success");
      }
    });
  
    }
    
    if(type == "updatedinner"){
      const a = req.body.iddinner;
      const b = req.body.itemname;
      const c = req.body.amount;
      const d = req.body.details;
      const f = req.body.chefid;
    
      var sql = `UPDATE dinner SET ItemName = "${b}", Amount = "${c}", Details = "${d}", idChefs = "${f}" WHERE iddinner = "${a}"`;
    
      con.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render("admin-success");
        }
      });
    
      }
  
    if(type == "deletedinner"){
    
      const a = req.body.iddinner;
  
      var sql = `DELETE FROM dinner WHERE iddinner = "${a}"`;
      con.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render("admin-success");
        }
      });
  
  
    }
  
  });

  app.post("/page-admin-dessert", (req, res) => {
    var a = req.body.dessert;
    // console.log(a);
    if(a == "add"){
      res.render("page-modify-dessert", { add: 1, update:0, deletee:0 } );
      }
      if(a == "update"){
      res.render("page-modify-dessert",{add: 0, update:1, deletee:0});
      }
      if(a == "delete"){
      res.render("page-modify-dessert",{add: 0, update:0, deletee:1});
      }
    
  });

  app.post("/page-modify-dessert", (req, res) => {
 
    var type = req.body.modifydessert;
    console.log(type);
  
    if(type == "adddessert"){
    const a = req.body.iddessert;
    const b = req.body.itemname;
    const c = req.body.amount;
    const d = req.body.details;
    const f = req.body.chefid;
  
    var sql = `INSERT INTO dessert (iddessert,ItemName,Amount,Details,idChefs) 
    VALUES ("${a}", "${b}", "${c}", "${d}", "${f}");`;
  
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin-success");
      }
    });
  
    }
    if(type == "updatedessert"){
      const a = req.body.iddessert;
      const b = req.body.itemname;
      const c = req.body.amount;
      const d = req.body.details;
      const f = req.body.chefid;
    
    var sql = `UPDATE dessert SET ItemName = "${b}", Amount = "${c}", Details = "${d}", idChefs = "${f}" WHERE iddessert = "${a}"`;
    
      con.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render("admin-success");
        }
      });
    
      }
  
    if(type == "deletedessert"){
    
      const a = req.body.iddessert;
  
      var sql = `DELETE FROM dessert WHERE iddessert = "${a}"`;
      con.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render("admin-success");
        }
      });
  
  
    }
  
  });

  app.post("/page-admin-drink", (req, res) => {
    var a = req.body.drink;
    // console.log(a);
    if(a == "add"){
      res.render("page-modify-drinks", { add: 1, update:0, deletee:0 } );
      }
      if(a == "update"){
      res.render("page-modify-drinks",{add: 0, update:1, deletee:0});
      }
      if(a == "delete"){
      res.render("page-modify-drinks",{add: 0, update:0, deletee:1});
      }
  });

  app.post("/page-modify-drinks", (req, res) => {
 
    var type = req.body.modifydrink;
    console.log(type);
  
    if(type == "adddrink"){
    const a = req.body.iddrink;
    const b = req.body.itemname;
    const c = req.body.amount;
    const d = req.body.details;
    const f = req.body.chefid;
  
    var sql = `INSERT INTO drinks (idDrinks,ItemName,Amount,Details,idChefs) 
    VALUES ("${a}", "${b}", "${c}", "${d}", "${f}");`;
  
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin-success");
      }
    });
  
    }

    if(type == "updatedrink"){
      const a = req.body.iddrink;
      const b = req.body.itemname;
      const c = req.body.amount;
      const d = req.body.details;
      const f = req.body.chefid;
    
     var sql = `UPDATE drinks SET ItemName = "${b}", Amount = "${c}", Details = "${d}", idChefs = "${f}" WHERE idDrinks = "${a}"`;
      con.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render("admin-success");
        }
      });
    
      }
  
    if(type == "deletedrink"){
    
      const a = req.body.iddrink;
  
      var sql = `DELETE FROM drinks WHERE idDrinks = "${a}"`;
      con.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render("admin-success");
        }
      });
  
  
    }
  
  } );

  app.post("/page-admin-shops", (req, res) => {
    var a = req.body.shops;
    // console.log(a);

    if(a == "add"){
    res.render("page-modify-shops", { add: 1, update: 0, deletee:0 } );
    }

    if(a == "update"){
    res.render("page-modify-shops", { add: 0, update:1, deletee:0 } );
    }

    if(a == "delete"){
    res.render("page-modify-shops", { add: 0, update: 0, deletee:1 } );
    }
    
  });

  app.post("/page-modify-shops", (req, res) => {
 
    var type = req.body.modifyshops;
   // console.log(type);
  
    if(type == "addshops"){

    const a = req.body.shopid;
    const b = req.body.shopname;
    const c = req.body.shopaddress;
    const d = req.body.shopphoneno;
    const f = req.body.chefid;
  
    var sql = `INSERT INTO shops (idShops,ShopName,ShopAddress,ShopPhoneNo,idChefs) 
    VALUES ("${a}", "${b}", "${c}", "${d}", "${f}");`;
    
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin-success");
      }
    });
  
    }

    if(type == "updateshops"){
     // console.log(type);
     const a = req.body.shopid;
     const b = req.body.shopname;
     const c = req.body.shopaddress;
     const d = req.body.shopphoneno;
     const f = req.body.chefid;
    
      var sql1 = `UPDATE shops SET ShopName = "${b}", ShopAddress = "${c}", ShopPhoneNo = "${d}", idChefs = "${f}" WHERE idShops = "${a}"`;
      
      con.query(sql1, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render("admin-success");
        }
      });
  
    }
  
    if(type == "deleteshops"){
    
      const a = req.body.shopid;
  
     var sql = `DELETE FROM shops WHERE idShops = "${a}"`;
      con.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.render("admin-success");
        }
      });
  
  
    }
  
  });

  app.post("/admin-Contactus", (req, res) => {

    var a = req.body.date;
    var sql = `SELECT * FROM adminContacts WHERE date = "${a}"`;
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin-Contactus", { data: result});
      }
    });
  });

  app.post("/admin-Reservations", (req, res) => {

    var a = req.body.date1;
    var sql = `SELECT * FROM adminReservations WHERE date = "${a}"`;
    con.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render("admin-Reservations", { data: result});
      }
    });
  });


export default app;
