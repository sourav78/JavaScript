const express = require("express")
const connectDB = require("./database")
const MovieModel = require("./model/movie.model")

const app = express()

connectDB()

app.get("/", async (req, res) => {
    try {
        const allMovies = await MovieModel.find()

        res.json(allMovies)
    } catch (error) {
        console.error("Error retrieving movies:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.listen(3001, () => console.log("Server is running on 3001"))