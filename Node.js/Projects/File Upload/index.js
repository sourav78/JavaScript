const express = require('express')
const path = require('path')
const { uploadOnCloudynary } = require('./utils/cloudinary')
const upload = require('./middlewares/multer.middleware')

const multer = require('multer')

const PORT = 8001

const app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))


app.get("/", (req, res) => {
    res.render("home")
})

app.post("/profile", upload.single('profileImage'), async (req, res) => {

    console.log(req.body);
    console.log(req.file.filename);

    const resp = await uploadOnCloudynary(`./public/images/${req.file.filename}`)

    console.log(resp);

    return res.redirect("/")
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))