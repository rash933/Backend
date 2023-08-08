const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser');

const app = express();

const connectDB = require("./app/config/db.config");

const teacherRoute = require("./app/routes/teacherRouter");
const studentRoute = require("./app/routes/studentRouter");
const markRoute = require("./app/routes/marksRouter");
const verifyRoute = require("./app/routes/verifyRouter");

var corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
};

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to SANKALPA." });
});

connectDB();

app.use("/api", teacherRoute);
app.use("/api", studentRoute);
app.use("/api", markRoute);
app.use("/api", verifyRoute);
// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

