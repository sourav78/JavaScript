import {Router} from 'express'
import { checkOut } from '../controllers/payment.controller.js'

const router = Router()

router.route('/checkout').post(checkOut)

export default router