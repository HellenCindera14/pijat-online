import { Request, Response } from "express";
import SellerService from "../services/SellerService";

class SellerController {
    async find(req: Request, res: Response) {
        try {
            const response = await SellerService.find()
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot get data seller!"})
        }
    }

    async create(req: Request, res: Response) {
        try {
            const response = await SellerService.create(req.body)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Failed register seller!"})
        }
    }

    async update(req: Request, res: Response) {
        try {
            const response = await SellerService.update(req.body)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Failed register seller!"})
        }
    }

    async login(req: Request, res: Response) {
        try {
            const response = await SellerService.login(req.body)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Failed login seller!"})
        }
    }
}

export default new SellerController()