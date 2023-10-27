import { Request, Response } from "express";
import SellerService from "../services/SellerService";

class SellerController {
    async find(req: Request, res: Response) {
        try {
            const gender = req.params.gender
            const { district } = req.query
            const response = await SellerService.find(gender, district)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot get data seller!"})
        }
    }
}

export default new SellerController()