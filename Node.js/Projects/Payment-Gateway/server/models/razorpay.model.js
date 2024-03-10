import mongoose from "mongoose";

const razorpaySchema = new mongoose.Schema({
    razorpay_payment_id: {
        type: String,
        require: true
    },
    razorpay_order_id: {
        type: String,
        require: true
    },
    razorpay_signature: {
        type: String,
        require: true
    }
})

export const razorpayModel = mongoose.model('razor', razorpaySchema)