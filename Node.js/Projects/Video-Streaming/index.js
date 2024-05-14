import express from 'express'
import cors from 'cors'
import multer from 'multer'
import {v4 as uuidv4} from 'uuid'
import path from 'path'
import fs from 'fs'
import { exec } from 'child_process'
import { error, log } from 'console'
import { stderr, stdout } from 'process'



const app = express()
const port = 3000

//multer

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./uploads")
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + "-" + uuidv4() + path.extname(file.originalname))
    },
})

const upload = multer({storage: storage})

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST']
}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")

    next()
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/uploads', express.static('uploads'))

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/upload', upload.single('file'), (req, res) => {
    
    const lessionId = uuidv4()
    const videoPath = req.file.path
    const outputPath = `./uploads/courses/${lessionId}`
    const hlsPath = `${outputPath}/index.m3u8`
    console.log(hlsPath);

    if(!fs.existsSync(outputPath)){
        fs.mkdirSync(outputPath, {recursive: true})
    }

    const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}`;

    exec(ffmpegCommand, (error, stdout, stderr) => {
        if(error){
            console.log(`error: ${error}`);
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);

        const vdoUrl = `http://localhost:3000/uploads/courses/${lessionId}/index.m3u8`

        res.json({
            message: 'Video converted into HLS format',
            videoUrl: vdoUrl,
            lessionId: lessionId
        })
    })
})

app.listen(port, () => console.log(`server srated on : http://localhost:${port}`))