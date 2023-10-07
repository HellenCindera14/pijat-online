import * as express from 'express'
import { Request, Response } from 'express'
import SellerController from '../controllers/SellerController'
import InvoiceController from '../controllers/InvoiceController'
import UserController from '../controllers/UserController'

const router = express.Router()

router.get("/", ( req: Request, res: Response) => {
    res.send("Hello from v1!!!!")
})

router.post("/register", UserController.register)
router.post("/login", UserController.login)

router.get("/kape", SellerController.find)
router.post("/kape/create", SellerController.create)
router.patch("/kape/:id", SellerController.update)
router.post("/kape/login", SellerController.login)

router.get("/invoice", InvoiceController.find)
router.post("/invoice/create", InvoiceController.create)
router.patch("/invoice/:id", InvoiceController.update)
router.delete("/invoice/:id", InvoiceController.delete)

export default router