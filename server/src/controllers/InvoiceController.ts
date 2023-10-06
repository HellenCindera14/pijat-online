import { Request, Response } from "express";
import InvoiceService from "../services/InvoiceService";

class InvoiceController {
    async find(req: Request, res: Response) {
        try {
            const response = await InvoiceService.find()
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot get data invoice!"})
        }
    }
}

export default new InvoiceController()