const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
require('dotenv').config()


const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://thesurajr:suraj5160@netflix-clones.9ajy3fv.mongodb.net/netflix-clones", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log("Server is not start");
  });
  app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.use("/api/user", userRoutes);
console.log(process.env.port);
const port=process.env.port;
app.listen(port, () => {
  console.log("server started on port 5000");
});
