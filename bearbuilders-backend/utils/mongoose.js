const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.DATABASE_CONNECTION_STRING)
  .then(() => console.log("Mongodb connected"))
  .catch((err) => console.log(err));
