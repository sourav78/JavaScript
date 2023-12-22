const express = require("express");
const http = require("http");

const app = express();

app.get("/", (req, res) => {
    return res.send("Listen from home page");
});

app.get("/about", (req, res) => {
    const basePath = req.path;

    return res.send(`Listen from about page. Base Path: ${basePath}`);
});

app.get("/contact", (req, res) => {
    // Extract the 'name' query parameter from the URL
    const name = req.query.name || 'Guest';

    return res.send(`Listen from contact page. Hello, ${name}!`);
});

app.listen(2222, () => console.log("Server started on express"))
