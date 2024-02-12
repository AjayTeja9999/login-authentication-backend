const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
    console.log(process.env.DB_URL);
    mongoose
    .connect(
        process.env.DB_URL,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true
      }
    ).then(() => {
        console.log("Successfully  connected to MongoDB Atlas!...");
      })
      .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
      });
}

module.exports = dbConnect;