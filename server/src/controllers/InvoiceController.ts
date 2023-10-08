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

    async create(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession
            const response = await InvoiceService.create(req.body, loginSession)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot create data invoice!"})
        }
    }
    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const loginSession = res.locals.loginSession

            const response = await InvoiceService.update(req.body, id ,loginSession)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot update data invoice!"})
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const response = await InvoiceService.delete(id)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot delete data invoice!"})
        }
    }
}

export default new InvoiceController()