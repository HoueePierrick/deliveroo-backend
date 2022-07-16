const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(formidable());
app.use(cors());

const data = require("./Components/data")

app.get("/", (req, res) => {
    try {
        res.status(200).json(data)
    } catch(error) {
        res.status(400).json(error.message)
    }
})

app.all("*", (req, res) => {
    res.status(400).json({message: "This route doesn't exist"})
})

app.listen(process.env.PORT, () => {
    console.log("Server started")
})