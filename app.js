import express from "express";
import bodyParser from "body-parser";
import users from "./src/routes/users.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { url } from "./src/config/db.config.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);
app.use(bodyParser.json());
app.use("/users", users);
app.listen(3000, () => {
  console.log("YOUR APP RUNNING ON PORT 3000");
  mongoose
    .connect(url)
    .then(() => {
      console.log("MONGODB CONNECTED");
    })
    .catch((err) => {
      console.error("SOMETHING WENT WRONG");
      console.log(err);
    });
});
