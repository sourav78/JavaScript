import express from "express";

const app = express()

app.get("/", (re, res) => {
    res.send("Hello XLXS")
})

app.listen(3002, () => console.log(`Server listen on port: 3002`))