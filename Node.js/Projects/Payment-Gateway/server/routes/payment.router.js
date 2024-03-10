import {Router} from 'express'
import { checkOut, paymentVerification } from '../controllers/payment.controller.js'

const router = Router()

router.route('/checkout').post(checkOut)
router.route('/paymentverification').post(paymentVerification)
router.route('/getkey').get((req, res) => {
    res.status(200).json({key: process.env.RAZOR_API_KEY})
})

export default router