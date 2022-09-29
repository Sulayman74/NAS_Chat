require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./DB/connectDB");

app.use(express.json());

app.get("api/v1/chatApp", (req, res) => {
  res.status(200).json({
    msg: "hello",
  });
});

const port = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await connectDB(process.env.DATABASE_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

startServer();
