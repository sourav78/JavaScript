import express from "express";
import { readDataFromExcel } from "./controllers/ReadData.js";

const app = express()

app.get("/", (re, res) => {
    res.send("Hello XLXS")
})

app.get("/read-data", readDataFromExcel)

app.listen(3002, () => console.log(`Server listen on port: 3002`))
// Read data form excel initialized