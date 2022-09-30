require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const userRouter = require("./routes/userRoute");
const roomRouter = require("./routes/roomRoute");
const authRouter = require("./routes/authRoute");

const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/errorHandler");

const connectDB = require("./DB/connectDB");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/chatApp/users", userRouter);
app.use("/api/v1/chatApp/rooms", roomRouter);
app.use("/api/v1/chatApp/auth", authRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3001;
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
