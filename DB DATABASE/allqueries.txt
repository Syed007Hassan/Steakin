Insert into testdb.users (fname,lName)
values ('MK','BH');

select * from testdb.users;

Delete from testdb.users 
where fName = "cr";

Insert into restaurantdb.chefs(idChefs,FName,LName,Toc)
values (9,'Anthony','Hunter','Chef Trainee');

UPDATE restaurantdb.chefs set Toc = 'Chef Assistant'
where idChefs = 8;

ALTER TABLE restaurantdb.chefs
ADD Toc VARCHAR(20);

select * from  restaurantdb.chefs;

DELETE FROM restaurantdb.chefs
where idChefs = 9;

Insert into restaurantdb.dinner(iddinner,ItemName,Amount,details)
values (1,'Homemade croissa','American Grilled',25.95,'Garlic, honey, pepper & canola oil.creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.');

Insert into restaurantdb.lunch(idlunch,ItemName,Amount,details)
values (2,'American Grilled',25.95,'Garlic, honey, pepper & canola oil.creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.');

Insert into restaurantdb.dessert(iddessert,ItemName,Amount,details)
values (4,'Pain au chocolat',24.75,'Baked and topped with cheddar cheese, with crusty bread for dipping.');

select * from restaurantdb.dessert;

Insert into restaurantdb.drinks(idDrinks,ItemName,Amount,details)
values (4,'Coffee Latte',33,' lemon slices, olives & mint, creamy crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread for dipping.');



Insert into restaurantdb.contactus(FirstName,LastName,Email,Phone,Message)
values('Hassan','Ali','syed007hassan@gmail.com','03452233131','hello i am awesome');

Insert into restaurantdb.bookingavailable(NoOfPeople,BDate,BTime)
values(10	,'18-DEC-22','1:00 PM');

delete from restaurantdb.bookingavailable
where BDate = '16-DEC-22' AND BTime = '10:00 PM' and NoOfPeople = 6;

select * from restaurantdb.bookingavailable;

INSERT INTO restaurant.bookingsmade (idBookingAvailable,CName,CPhone) VALUES ("${bid}","${firstname}","${phone}")

select idBookingAvailable from restaurantdb.bookingavailable 
where BDate = '16-DEC-22' AND BTime = '10:00 PM' AND NoOfPeople = '6';

Delete from restaurantdb.bookingavailable
where idBookingAvailable = 3;

delete from restaurantdb.dessert
where iddessert = 2;

select BDate,BTime,NoOfPeople  from restaurantdb.bookingavailable 
where idBookingAvailable = 3;

alter table restaurantdb.lunch
add column Details varchar(100);


Update restaurantdb.breakfast
set Details = 'Roast trout, English asparagus, watercress & royals, creamy chesapeake crab dip with artichoke, baked and topped with cheddar cheese, with crusty bread.'
where idBreakfast  = 2;

drop table restaurantdb.contactus;

select * from restaurantdb.todaymenu; 

Insert into restaurantdb.todaymenu(idBreakfast,idlunch,iddinner,iddessert,idDrinks)
values(1,2,2,4,3);

-- this will give result in bench but wont show result properly in terminal using route
-- localhost:3000/hello
select 
restaurantdb.bf.ItemName,restaurantdb.bf.Amount,restaurantdb.bf.Details,
restaurantdb.lc.ItemName,restaurantdb.lc.Amount,restaurantdb.lc.Details,
restaurantdb.dn.ItemName,restaurantdb.dn.Amount,restaurantdb.dn.Details,
restaurantdb.ds.ItemName,restaurantdb.ds.Amount,restaurantdb.ds.Details,
restaurantdb.dr.ItemName,restaurantdb.dr.Amount,restaurantdb.dr.Details
from 
restaurantdb.breakfast bf,
restaurantdb.lunch lc,
restaurantdb.dinner dn,
restaurantdb.dessert ds,
restaurantdb.drinks dr,
restaurantdb.todaymenu tm
where 
(bf.idBreakfast = tm.idBreakfast) And 
(lc.idlunch = tm.idlunch) AND
(dn.iddinner = tm.iddinner) AND
(ds.iddessert = tm.iddessert) AND
(dr.idDrinks = tm.idDrinks); 

select 
restaurantdb.bf.ItemName,restaurantdb.bf.Amount,restaurantdb.bf.Details
from 
restaurantdb.breakfast bf,
restaurantdb.todaymenu tm
where 
(bf.idBreakfast = tm.idBreakfast);



 select * from restaurantdb.todaymenu; 

select restaurantdb.todaymenu.idBreakfast 
from restaurantdb.todaymenu;

-- ItemName,Amount,details

 alter table restaurantdb.todaymenu;

select * from restaurantdb.bookingsmade;

-- set serveroutput on;
-- DECLARE
-- e_id restauranrdb.drinks.idDrinks%type;
-- e_name restauranrdb.drinks.ItemName%type;
-- e_lname restauranrdb.drinks.Amount%type;
-- d_name restauranrdb.drinks.Details%type;
-- BEGIN
-- SELECT EMPLOYEE_ID,FIRST_NAME,LAST_NAME,DEPARTMENT_NAME
-- INTO e_id, e_name, e_lname, d_name
-- FROM employees inner join DEPARTMENTS
-- on employees.DEPARTMENT_ID = DEPARTMENTS.DEPARTMENT_ID and
-- END;


DELIMITER //
CREATE PROCEDURE restaurantdb.MyStoredProcedure5(
  id INT,
  fname VARCHAR(20), 
  lname VARCHAR(20), 
  toc VARCHAR(20), 
  shopid INT )
BEGIN
  INSERT INTO chefs(idChefs,FName,LName,TOC,shopid) VALUES(id,fname,lname,toc,shopid);
END //
DELIMITER ;

call restaurantdb.MyStoredProcedure5(9,'hassan','ali','master',2);

DELIMITER //
CREATE PROCEDURE restaurantdb.UpdateChefs(
  id INT,
  fname VARCHAR(20), 
  lname VARCHAR(20), 
  toc VARCHAR(20), 
  shopidd INT )
BEGIN
  UPDATE CHEFS SET FName = fname, LName = lname, Toc = toc, shopid = shopidd WHERE idChefs = id;
END //
DELIMITER ;

call restaurantdb.UpdateChefs(8,'hassan','ali','master',2);


DELIMITER //
CREATE PROCEDURE restaurantdb.DeleteChef(
  id INT
  )
BEGIN
  Delete from restaurantdb.chefs where idChefs = id;
END //
DELIMITER ;

call restaurantdb.DeleteChef(8);

DELIMITER //
CREATE PROCEDURE restaurantdb.AddReservations(
  nop INT, 
  bd VARCHAR(30), 
  bt VARCHAR(30)
   )
BEGIN
  Insert into bookingavailable(NoOfPeople,BDate,BTime)
values(nop,bd,bt);
END //
DELIMITER ;

call restaurantdb.AddReservations(20,'18-DEC-22','1:00 PM');

DELIMITER //
CREATE PROCEDURE restaurantdb.UpdateTodayMenu(
  idb INT, 
  idl INT,
  idd INT,
  iddes INT,
  iddr INT
   )
BEGIN
 Insert into todaymenu(idBreakfast,idlunch,iddinner,iddessert,idDrinks) 
 values(idb,idl,idd,iddes,iddr);
END //
DELIMITER ;

call restaurantdb.UpdateTodayMenu(1,1,2,3,4);


DELIMITER //
CREATE TRIGGER restaurantdb.Add_into_bookings_made
AFTER DELETE
 ON bookingavailable FOR EACH ROW
BEGIN

INSERT INTO bookingsmade(idbookingsmade,idBookingAvailable,CName,CPhone) 
values (idbookingsmade,old.idBookingAvailable,CName,CPhone);

 END; // DELIMITER ;

DELIMITER //
CREATE TRIGGER restaurantdb.Add_into_bookings_made__
AFTER INSERT
 ON bookingsmadeh FOR EACH ROW
BEGIN

INSERT INTO bookingsmade(idbookingsmade,idBookingAvailable,CName,CPhone,Date) 
values (new.idbookingsmade,new.idBookingAvailable,new.CName,new.CPhone,new.Date);

 END; // DELIMITER ;
 
 DELIMITER //
CREATE TRIGGER restaurantdb.OldChefRecord
AFTER Delete
 ON chefs FOR EACH ROW
BEGIN
Insert into restaurantdb.oldchefs(idChefs,FName,LName,Toc,shopid)
values (old.idChefs,old.FName,old.LName,old.Toc,old.shopid);

 END; // DELIMITER ;
 
  DELIMITER //
CREATE TRIGGER restaurantdb.OldBreakfastRecord
AFTER Delete
 ON breakfast FOR EACH ROW
BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (old.idBreakfast,old.ItemName,old.Amount,old.Details,old.idChefs);

 END; // DELIMITER ;
 
   DELIMITER //
CREATE TRIGGER restaurantdb.OldBreakfastRecords
AFTER Update
 ON breakfast FOR EACH ROW
BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (new.idBreakfast,new.ItemName,new.Amount,new.Details,new.idChefs);

 END; // DELIMITER ;
 
 DELIMITER //
 CREATE TRIGGER restaurantdb.OldLunchRecord
AFTER Delete
 ON lunch FOR EACH ROW
BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (old.idlunch,old.ItemName,old.Amount,old.Details,old.idChefs);

 END; // DELIMITER ;
 
 DELIMITER //
 CREATE TRIGGER restaurantdb.OldLunchRecords
AFTER Update
 ON lunch FOR EACH ROW
BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (new.idlunch,new.ItemName,new.Amount,new.Details,new.idChefs);

 END; // DELIMITER ;
 
  DELIMITER //
 CREATE TRIGGER restaurantdb.OldDinnerRecord
AFTER Delete
 ON dinner FOR EACH ROW
BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (old.iddinner,old.ItemName,old.Amount,old.Details,old.idChefs);

 END; // DELIMITER ;
 
 DELIMITER //
 CREATE TRIGGER restaurantdb.OldDinnerRecords
AFTER Update
 ON dinner FOR EACH ROW
BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (new.iddinner,new.ItemName,new.Amount,new.Details,new.idChefs);

 END; // DELIMITER ;
 
  DELIMITER //
 CREATE TRIGGER restaurantdb.OldDessertRecord
AFTER Delete
 ON dessert FOR EACH ROW
BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (old.iddessert,old.ItemName,old.Amount,old.Details,old.idChefs);

 END; // DELIMITER ;
 
 DELIMITER //
 CREATE TRIGGER restaurantdb.OldDessertRecords
AFTER Update
 ON dessert FOR EACH ROW
BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (new.iddessert,new.ItemName,new.Amount,new.Details,new.idChefs);

 END; // DELIMITER ;
 
   DELIMITER //
 CREATE TRIGGER restaurantdb.OldDrinkRecord
AFTER Delete
 ON drinks FOR EACH ROW
BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (old.idDrinks,old.ItemName,old.Amount,old.Details,old.idChefs);

 END; // DELIMITER ;
 
 DELIMITER //
 CREATE TRIGGER restaurantdb.OldDrinkRecords
AFTER Update
 ON drinks FOR EACH ROW
BEGIN
Insert into restaurantdb.oldmenu(idmenu,ItemName,Amount,Details,idChefs)
values (new.idDrinks,new.ItemName,new.Amount,new.Details,new.idChefs);

 END; // DELIMITER ;



-- CREATE VIEW restaurantdb.contacts AS SELECT Date, count(*) FROM restaurantdb.contactus group by Date;

select * from restaurantdb.contacts;
select * from restaurantdb.bookingavailable;
select * from restaurantdb.bookingsmade;

Drop view Contacts;

CREATE VIEW restaurantdb.bookings AS SELECT Date, count(*) FROM restaurantdb.bookingsmade group by Date;

select * from restaurantdb.bookings;

CREATE VIEW restaurantdb.adminContacts AS SELECT date, Email, Message FROM restaurantdb.contactus;

select * from restaurantdb.adminReservations;

CREATE VIEW restaurantdb.adminBookings AS SELECT Date, CName, CPhone FROM restaurantdb.bookingsmade;

DELIMITER //
CREATE FUNCTION checkadmin(usern VARCHAR(20), pass VARCHAR(20))
RETURNS INT
BEGIN
DECLARE ispresent INT; 
DECLARE us VARCHAR(20);
set ispresent = FALSE;
Select usernamee into us from admins where passwordd = pass;
IF (usern = us) THEN
set ispresent = true;
  end if;
  RETURN(ispresent);
END; // DELIMITER ;

 SELECT checkadmin("ehtesham","ehtesham");


SET GLOBAL log_bin_trust_function_creators = 1;

Delete from restaurantdb.bookingavailable
where idBookingAvailable = 31;

select * from restaurantdb.chefs; 
select * from restaurantdb.shops;
select * from restaurantdb.bookingavailable;
select * from restaurantdb.bookingsmade;
select * from restaurantdb.bookingsmadeh;
select * from restaurantdb.shops;
select * from restaurantdb.todaymenu; 
select * from restaurantdb.contactus;
select * from restaurantdb.oldmenu;

truncate restaurantdb.bookingsmade;
truncate restaurantdb.bookingsmadeh;
truncate restaurantdb.todaymenu;
truncate restaurantdb.contactus;

select * from restaurantdb.chefs; 
select * from restaurantdb.breakfast;
select * from restaurantdb.dessert;
select * from restaurantdb.dinner;
select * from restaurantdb.drinks;
select * from restaurantdb.lunch; 
select * from restaurantdb.oldchefs;

DELETE from restaurantdb.chefs where idChefs =6;
truncate restaurantdb.oldchefs;


