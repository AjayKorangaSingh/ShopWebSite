const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DataBase has been connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is listening at port 5000");
});
