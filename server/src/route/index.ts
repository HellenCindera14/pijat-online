import * as express from 'express'
import { Request, Response } from 'express'
import SellerController from '../controllers/SellerController'
import InvoiceController from '../controllers/InvoiceController'
import addressTemplateController from '../controllers/addressTemplateController'

const router = express.Router()

router.get("/", ( req: Request, res: Response) => {
    res.send("Hello from v1!")
})

router.get("/kape", SellerController.find)
router.post("/kape/create", SellerController.create)
router.patch("/kape/:id", SellerController.update)
router.post("/kape/login", SellerController.login)

router.get("/invoice", InvoiceController.find)
router.post("/invoice/create", InvoiceController.create)
router.patch("/invoice/:id", InvoiceController.update)
router.delete("/invoice/:id", InvoiceController.delete)

router.get("/addressTemplate", addressTemplateController.find)
router.post("/addressTemplate/create", addressTemplateController.create)
router.delete("/addressTemplate/:id", addressTemplateController.delete)

export default router