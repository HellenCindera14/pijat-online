import { Request, Response } from "express";
import AddressTemplateService from "../services/AddressTemplateService";

class AddressTemplateController {
    async find(req: Request, res: Response) {
        try {
            const response = await AddressTemplateService.find()
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot get data address template!"})
        }
    }

    async create(req: Request, res: Response) {
        try {
            const response = await AddressTemplateService.create(req.body)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: "Cannot create data address template!"})
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const response = await AddressTemplateService.delete(id)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot delete data address template!"})
        }
    }
}

export default new AddressTemplateController()