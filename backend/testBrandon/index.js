const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { response } = require("express");

const app = express();
const port = process.env.PORT || 3001;

// app.use(cors()); //Enable cors
app.use(morgan()); //Generate more user logs
app.use(helmet()); //Increase api security

app.get("/about", (req, res) => {
    res.status(200);
    res.json("This is the speechAI microservice");
});

app.listen(port, () => {
  console.log(`SpeechAI microservice started on port ${port}`);
});
