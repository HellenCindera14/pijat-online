import * as express from 'express'
import { Request, Response } from 'express'
import SellerController from '../controllers/SellerController'
import InvoiceController from '../controllers/InvoiceController'

const router = express.Router()

router.get("/", ( req: Request, res: Response) => {
    res.send("Hello from v1!")
})

router.get("/seller", SellerController.find)
router.post("/seller/create", SellerController.create)
router.patch("/seller/update", SellerController.update)
router.post("/seller/login", SellerController.login)

router.get("/invoice", InvoiceController.find)

export default router