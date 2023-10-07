import { Request, Response } from "express";
import ComplaintService from "../services/ComplaintService";

class ComplaintController {
    async find(req: Request, res: Response) {
        try {
            const response = await ComplaintService.find()
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot get data complaint!"})
        }
    }

    async create(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession
            const response = await ComplaintService.create(req.body, loginSession)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot create data complaint!"})
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const response = await ComplaintService.delete(id)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot create data complaint!"})
        }
    }
}

export default new ComplaintController()