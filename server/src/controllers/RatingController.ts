import { Request, Response } from "express";
import RatingService from "../services/RatingService";

class RatingController {
    async find(req: Request, res: Response) {
        try {
            const response = await RatingService.find()
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot get data rating!"})
        }
    }

    async create(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession
            const response = await RatingService.create(req.body, loginSession)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot create data rating!"})
        }
    }

    async update(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession
            const id = parseInt(req.params.id)
            const response = await RatingService.update(req.body, id, loginSession)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot update data rating!"})
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const response = await RatingService.delete(id)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Cannot delete data rating!"})
        }
    }
}

export default new RatingController()