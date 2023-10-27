import * as express from 'express'
import { Request, Response } from 'express'
import SellerController from '../controllers/SellerController'
import InvoiceController from '../controllers/InvoiceController'
import UserController from '../controllers/UserController'
import auth from '../libs/auth'
import ComplaintController from '../controllers/ComplaintController'
import RatingController from '../controllers/RatingController'
import AddressTemplateController from '../controllers/addressTemplateController'
import InvoiceHistoryController from '../controllers/InvoiceHistoryController'

const router = express.Router()

router.get("/", ( req: Request, res: Response) => {
    res.send("Hello from v1!!!!")
})

router.get("/cs/:gender", auth, UserController.find)
router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.patch("/cs/:id", auth, UserController.update)

router.get("/kape/:gender", auth, SellerController.find)

router.get("/invoice", auth, InvoiceController.find)
router.post("/invoice/create", auth, InvoiceController.create)
router.patch("/invoice/:id", auth, InvoiceController.update)
router.delete("/invoice/:id", auth, InvoiceController.delete)

router.get("/addressTemplate", auth, AddressTemplateController.find)
router.post("/addressTemplate/create", auth, AddressTemplateController.create)
router.delete("/addressTemplate/:id", auth, AddressTemplateController.delete)

router.get("/complaint", auth, ComplaintController.find)
router.post("/complaint/create", auth, ComplaintController.create)
router.delete("/complaint/:id", auth, ComplaintController.delete)

router.get("/rating", auth, RatingController.find)
router.post("/rating/create", auth, RatingController.create)
router.patch("/rating/:id", auth, RatingController.update)
router.delete("/rating/:id", auth, RatingController.delete)

router.get('/invoiceHistory', auth, InvoiceHistoryController.find)

export default router