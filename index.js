require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = 3009;
const connectDB = require("./config/db");
const app = express();
app.use(cors());
app.use(express.json());

const todoRoutes = require("./routes/todoRoute");
//connect the db
connectDB();

//use route
app.use("/todo", todoRoutes);
app.get("/", (req, res) => {
  return res.send("Welcome to Yayi's page");
});
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
