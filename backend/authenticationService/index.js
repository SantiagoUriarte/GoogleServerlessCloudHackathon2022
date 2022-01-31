const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3003;
// Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, () => console.log("connected to db!"));

// Middleware
app.use(express.json());

// Route Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.use(cors()); //Enable cors
app.use(morgan()); //Generate more user logs
app.use(helmet()); //Increase api security

app.listen(port, () => {
  console.log(`Authentication microservice started on port ${port}`);
});
