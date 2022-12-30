import app from "./app.js";
import con from "./database.js";

// const app = require('./app.js');
// const con = require('./database.js');

// PORT
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Node server is running on PORT: ${PORT}`);

  con.connect((err) => {
    if (err) {

      console.log("Error connecting to Db");
      return;
    }
    console.log(`Db server is running on PORT: 3306`);
  });
});

