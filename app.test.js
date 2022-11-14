import request from "supertest"
import app from "./app.js"
import bodyParser from 'body-parser';
import { jest } from '@jest/globals';
import mysql from 'mysql2';
import con from './database.js';

// const request = require('supertest');
// const app = require('./app.js');
// const bodyParser = require('body-parser');

jest.useFakeTimers();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const dbtest = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fast123',
    database: 'restaurantdb'
});


describe("Testing the connectivity of MySQL", () => {
    test("Connection setup using database.js file", async () => {
      const response = con.connect();
      const response1 = dbtest.connect();
      expect(response).toBe(response1);
    });
  });


describe("Test the root path", () => {
    test("It should response the GET method", done => {
      request(app)
        .get("/hassan")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

// describe("Test the root path", () => {
//     test("It should response the GET method", async () => {
//       const response = await request(app).get("/");
//       expect(response.statusCode).toBe(200);
//     });
//   });


 

