import dotenv from 'dotenv'
dotenv.config({ path: './config.env' })
import express from 'express'
import Razorpay from 'razorpay'
import paymentRoute from './routes/payment.router.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

export const instance = new Razorpay({
    key_id: process.env.RAZOR_API_KEY,
    key_secret: process.env.RAZOR_API_SECRET,
});

app.use('/api', paymentRoute)

app.get('/', (req, res) => {
    res.send("hello payment")
})

app.listen(process.env.PORT, () => {
    console.log(`Server started: http://localhost:${process.env.PORT}`);
})