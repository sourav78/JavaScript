import { instance } from "../index.js"

export const checkOut = async (req, res) => {

    const {amount} = req.body


    const options = {
        amount: Number(amount)*100,  
        currency: "INR",
        receipt: "order_rcptid_11"
    };

    const order = await instance.orders.create(options);

    console.log(order);
    res.status(200).json(order)
}