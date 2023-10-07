import * as express from 'express'
import { Request, Response } from 'express'
import SellerController from '../controllers/SellerController'
import InvoiceController from '../controllers/InvoiceController'
import addressTemplateController from '../controllers/addressTemplateController'
import UserController from '../controllers/UserController'
import auth from '../libs/auth'

const router = express.Router()

router.get("/", ( req: Request, res: Response) => {
    res.send("Hello from v1!!!!")
})

router.post("/register", UserController.register)
router.post("/login", UserController.login)

router.get("/kape", auth, SellerController.find)
router.post("/kape/create", SellerController.create)
router.patch("/kape/:id", auth, SellerController.update)
router.post("/kape/login", SellerController.login)

router.get("/invoice", auth, InvoiceController.find)
router.post("/invoice/create", auth, InvoiceController.create)
router.patch("/invoice/:id", auth, InvoiceController.update)
router.delete("/invoice/:id", auth, InvoiceController.delete)

router.get("/addressTemplate", auth, addressTemplateController.find)
router.post("/addressTemplate/create", auth, addressTemplateController.create)
router.delete("/addressTemplate/:id", auth, addressTemplateController.delete)

export default router