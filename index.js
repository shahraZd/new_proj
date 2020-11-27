const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

//set up express

const app = express();
app.use(express.json());
app.use(cors());

//set up mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("mongoDB connection established");
  }
);

//set up routes

app.use("/users", require("./routes/userRouter"));
app.use("/pro", require("./routes/proRouter"));
app.use("/login", require("./routes/login"));

//serve static assets if in prod
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Connecting on ${port}`));
