require("dotenv").config();
const express = require("express");
const app = express();
const port = 30001;
const mongodb = require("mongodb");

app.get("/", (req, res) => {
res.send({message:"Successfully connected to the database"})
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
