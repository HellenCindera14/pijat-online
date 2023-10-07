import * as express from 'express'
import { Request, Response } from 'express'
import SellerController from '../controllers/SellerController'
import InvoiceController from '../controllers/InvoiceController'
import UserController from '../controllers/UserController'
import auth from '../libs/auth'
import ComplaintController from '../controllers/ComplaintController'
import RatingController from '../controllers/RatingController'
import AddressTemplateController from '../controllers/addressTemplateController'
import InvoiceHistoryService from '../services/InvoiceHistoryService'

const router = express.Router()

router.get("/", ( req: Request, res: Response) => {
    res.send("Hello from v1!!!!")
})

router.post("/register", UserController.register)
router.post("/login", UserController.login)

router.get("/kape/:gender", SellerController.find)
router.post("/kape/create", SellerController.create)
router.patch("/kape/:id", SellerController.update)
router.post("/kape/login", SellerController.login)

router.get("/invoice", InvoiceController.find)
router.post("/invoice/create", InvoiceController.create)
router.patch("/invoice/:id", InvoiceController.update)
router.delete("/invoice/:id", InvoiceController.delete)

router.get("/addressTemplate", AddressTemplateController.find)
router.post("/addressTemplate/create", AddressTemplateController.create)
router.delete("/addressTemplate/:id", AddressTemplateController.delete)

router.get("/complaint", ComplaintController.find)
router.post("/complaint/create", ComplaintController.create)
router.delete("/complaint/:id", ComplaintController.delete)

router.get("/rating", RatingController.find)
router.post("/rating/create", RatingController.create)
router.patch("/rating/:id", RatingController.update)
router.delete("/rating/:id", RatingController.delete)

router.get('/invoiceHistory', InvoiceHistoryService.find)

export default router