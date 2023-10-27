import { Request, Response } from "express";
import UserServices from "../services/UserServices";

class UserController {
    async find(req: Request, res: Response) {
        try {
            const gender = req.params.gender
            const response = await UserServices.find(gender)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot get data seller!"})
        }
    }

    async update(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const response = await UserServices.update(req.body, id)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Failed register seller!"})
        }
    }

    async register(req: Request, res: Response) {
        try {
            const response = await UserServices.create(req.body)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Failed register users!"})
        }
    }

    async login(req: Request, res: Response) {
        try {
            const response = await UserServices.login(req.body)
            return res.status(200).json(response)
            
        } catch (err) {
            return res.status(500).json({ error: "Failed login users!"})
        }
    }
}

export default new UserController()