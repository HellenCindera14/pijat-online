import * as express from 'express'
import { Request, Response } from 'express'
import SellerController from '../controllers/SellerController'

const router = express.Router()

router.get("/", ( req: Request, res: Response) => {
    res.send("Hello from v1!")
})

router.get("/seller", SellerController.find)
router.post("/seller/create", SellerController.create)
router.patch("/seller/update", SellerController.update)

export default router