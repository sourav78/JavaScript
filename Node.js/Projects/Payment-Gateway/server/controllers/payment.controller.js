import { instance } from "../index.js"
import crypto from 'crypto'
import { razorpayModel } from "../models/razorpay.model.js";

export const checkOut = async (req, res) => {

    const { amount } = req.body

    const options = {
        amount: Number(amount) * 100,
        currency: "INR",
        receipt: "order_rcptid_11"
    };

    const order = await instance.orders.create(options);

    res.status(200).json(order)
}

export const paymentVerification = async (req, res) => {

    const {razorpay_payment_id, razorpay_order_id, razorpay_signature} = req.body
    const body = razorpay_order_id + "|" + razorpay_payment_id

    const generated_signature = crypto.createHmac('sha256', process.env.RAZOR_API_SECRET)
                                .update(body.toString())
                                .digest('hex')

    if (generated_signature === razorpay_signature) {

        await razorpayModel.create({
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature
        })

        res.redirect(`http://localhost:5173/paymentsuccess?refrence=${razorpay_payment_id}`)
    }else{
        res.status(400).json({
            success: false
        })
    }
}