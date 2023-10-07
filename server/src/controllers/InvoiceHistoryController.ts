import { Request, Response } from "express";
import InvoiceHistoryService from "../services/InvoiceHistoryService";

class InvoiceHistoryController {
    async find(req: Request, res: Response) {
        try {
            const response = await InvoiceHistoryService.find()
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot get data invoice history!"})
        }
    }
}

export default new InvoiceHistoryController()