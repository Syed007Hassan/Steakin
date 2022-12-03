import request from "supertest";
import app from "./app.js";
import bodyParser from "body-parser";
import { jest } from "@jest/globals";
import mysql from "mysql2";
import con from "./database.js";
import { response } from "express";


// const request = require('supertest');
// const app = require('./app.js');
// const bodyParser = require('body-parser');

jest.useFakeTimers();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
jest.setTimeout(30000);

const dbtest = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fast123",
  database: "restaurantdb",
});

let currentDate = new Date().toJSON().slice(0, 10);
 // console.log(currentDate);

  var sql = `INSERT INTO contactus (FirstName,LastName,Email,Phone,Message,date)
   VALUES ("fname", "lname", "email", "phone", "message", "${currentDate}")`;

 const testresult =  con.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
 
      return response.statusCode;
    }
  });

describe("Testing the connectivity of MySQL", () => {
  test("Connection setup using database.js file", async () => {
    const response = con.connect();
    const response1 = dbtest.connect();
    expect(response).toBe(response1);
  });
});

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

});

describe("Test the post request", () => {

  test("should respond with a 200 status code", (done) => {
    const response = request(app).post("/page-contacts").send({
      fname: "ali",
      lname: "password",
      email: "asd@gmail.com" ,
      phone: "234234", 
      message: "hello world" 
    });
    expect(response.statusCode).toBe(testresult);
    done();
  })

  });
