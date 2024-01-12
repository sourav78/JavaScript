const express = require('express')
const path = require('path')
const multer = require('multer')

const PORT = 8000

const app = express()

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./images")
    },
    filename: function(req, file, cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

app.set("view engine", "ejs")
app.set("views", path.resolve("./view"))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))


app.get("/", (req, res) => {
    res.render("home")
})

app.post("/profile", upload.single("profileImage"), (req, res) => {

    console.log(req.body);
    console.log(req.file.filename);

    return res.redirect("/")
})

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))