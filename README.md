# Steakin
## Restaurant Reservation & Management System.

### 1. ABSTRACT: 
The system provides convenience to the customer and the staff. It provides a better communication platform. This System sets up a menu online and customers can easily access the website from any browser with a simple mouse click. By using the system, it would be feasible to store data on chefs, menu items, customer queries, reservations available and different shops. The website also allows customers to easily reserve/book a table without visiting the restaurant or making a phone call. The user’s information which the website requires for reservations and contact facilitates is also kept private. Customers can view our menu, items and prices on the website before visiting us. To build a trustworthy relationship with the customers, we also provide the details of our chefs directly on the website.

### 2. PROBLEM STATEMENT:
 A restaurant SteakIn wants to have an online website where they can provide a platform for the customers to contact the restaurant or send a message if they have any queries, etc. SteakIn currently has a manual system in which the customers have to make a phone call and then wait for the administration to entertain the call. This is time-consuming for the customers so Steakin wants a website where the customers can directly reserve a seat. Furthermore, their management saves everything on paper which is time-consuming and less secure so they also want a management system where they can also store their data directly from the interface and also view the data from there directly. It will save the time of the administrator tremendously.


### 3. MAIN FEATURES: 
We have designed the features according to the need of stakeholders.
1. Customers 
*  They can check out our five different types of menus and today's menu (special items of the day). 
*  They can check out all the chefs working in different branches of the restaurant. 
*  They can leave a query by filling out a contact us form. 
*  They can book a table according to their availability (date, time and capacity), by filling out a reservation form.

2. Admin 

He can authorize to manage the whole admin portal. 
*  He can add/update/delete chefs. 
*  He can add/update/delete reservations so that customers can book easily. 
*  He can add/update/delete all five different types of menus along with today’s menu. 
*  He can enter a specific date to see all the queries made by customers. 
*  He can enter a specific date to check all the reservations on a particular date.

### 4. CONCEPTUAL SCHEMA (ERD)
<p align="center">
  <img src="https://user-images.githubusercontent.com/104893311/212904082-522150b7-76ea-4df1-b477-f8e1919aaaf4.png">
</p>

### 4.1 ARCHITECTURAL DESIGN 
This website is built on a 3-tier architecture.
* The user interface. 
* The application tier. 
* The data tier. 

Using 3-tier architecture, we have the advantage of developing and managing them separately and the benefit of updating and scaling them without impacting the other tiers. At first, the user enters the query or performs the action in the user interface. It is received by the application tier which processes the query and communicates with the database in the data tier. It then processes that data and displays it to the user in the user interface.
<p align="center">
  <img src="https://user-images.githubusercontent.com/104893311/212904819-23a25378-343c-4ec0-9bb5-ca7934acc09c.png">
</p>

### 5. NORMALIZATION

* BookingsMade

_**idBookingAvailable**_ | _**idBookingMade**_ | CName | CPhone 
-- | -- | -- | -- 

* BookingAvailable

_**idBookingAvailable**_ | NoOfPeople | BDate | BTime | idShops
-- | -- | -- | -- | --

* Shops

_**idShops**_ | ShopName | ShopAddress | ShopePhoneNo 
-- | -- | -- | -- 

* Chefs

_**idChefs**_ | FName | LName | ToC | idShops
-- | -- | -- | -- | --

* TodaysMenu

_**idBreakfast**_ | _idLunch_ | _idDinner_ | _idDesserts_ | _idDrinks_
-- | -- | -- | -- | --

* Breakfast

_**idBreakfast**_ | itemName | amount | details | idChefs
-- | -- | -- | -- | --

* Lunch

_**idLunch**_ | itemName | amount | details | idChefs
-- | -- | -- | -- | --

* Dinner

_**idDinner**_ | itemName | amount | details | idChefs
-- | -- | -- | -- | --

* Drinks

_**idDrinks**_ | itemName | amount | details | idChefs
-- | -- | -- | -- | --

* Desserts

_**idDesserts**_ | itemName | amount | details | idChefs
-- | -- | -- | -- | --

* ContactsUs

_**idContactUs**_ | Fname | LName | Email | Phone | Message
-- | -- | -- | -- | -- | --

### 6. OVERVIEW OF SOFTWARE
* LANDING PAGE
<p align="center">
  <img src="https://user-images.githubusercontent.com/104893311/212917161-84e6a6b4-07de-4349-8283-32887163d8b7.png">
</p>

* CONTACT US FORM
<p align="center">
  <img src="https://user-images.githubusercontent.com/104893311/212917587-6a04efea-18ba-4cfc-a714-45aadd13a998.png">
</p>

* CHEFS PAGE
<p align="center">
  <img src="https://user-images.githubusercontent.com/104893311/212917880-539ccede-d900-437e-8206-2a18357e6d04.png">
</p>

* MENU PAGE
<p align="center">
  <img src="https://user-images.githubusercontent.com/104893311/212919349-6f70d8d2-5b7f-4934-b1f1-cf4456ab5472.png">
</p>

* RESERVATION
<p align="center">
  <img src="https://user-images.githubusercontent.com/104893311/212919736-a2707638-143b-45c0-b735-bc9ca839d57e.png">
 <img src="https://user-images.githubusercontent.com/104893311/212919736-a2707638-143b-45c0-b735-bc9ca839d57e.png">
</p>

* ADMIN PORTAL
<p align="center">
  <img src="https://user-images.githubusercontent.com/104893311/212920028-234bd4dc-3c0d-4804-b24a-341177641bc1.png">
  <img src="https://user-images.githubusercontent.com/104893311/212920191-d64cc1b2-097e-4085-957c-a61dc98e2b06.png">
</p>

### 7. TECH STACK:
7.1 FRONT-END
*  HTML5
*  EJS
*  CSS (BOOTSTRAP)
*  JAVASCRIPT (ES6)

7.2 BACKEND
*  NODEJS WITH EXPRESSJS
*  MYSQL

7.3 TOOLS
* VSCODE IDE
* HYPER TERMINAL
* MYSQL WORKBENCH

### 8. HOW TO RUN?
`git clone https://github.com/Syed007Hassan/Steakin.git `

`cd (to the cloned directory)`

`npm i`

`nodemon server.js`







