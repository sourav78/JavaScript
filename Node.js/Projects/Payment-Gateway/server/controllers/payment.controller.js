import { instance } from "../index.js"
import crypto from 'crypto'

export const checkOut = async (req, res) => {

    const { amount } = req.body


    const options = {
        amount: Number(amount) * 100,
        currency: "INR",
        receipt: "order_rcptid_11"
    };

    const order = await instance.orders.create(options);

    console.log(order);
    res.status(200).json(order)
}

export const paymentVerification = (req, res) => {
    // console.log(req.body);
    const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body
    const body = razorpay_order_id + "|" + razorpay_payment_id

    const generated_signature = crypto.createHmac('sha256', process.env.RAZOR_API_SECRET)
                                .update(body.toString())
                                .digest('hex')

    console.log(generated_signature);
    console.log(razorpay_signature);

    if (generated_signature == razorpay_signature) {
        res.redirect(`http://localhost:5173/paymentsuccess?refrence=${razorpay_payment_id}`)
    }else{
        res.status(400).json({
            success: false
        })
    }

    res.status(200).json({
        success: true
    })
}