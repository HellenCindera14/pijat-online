import { Request, Response } from "express";
import UserServices from "../services/UserServices";

class UserController {


    async register(req: Request, res: Response) {
        try {
            const response = await UserServices.register(req.body)
            return res.status(200).json(response)
        } catch (err) {
            return res.status(500).json({ error: "Failed register users!"})
        }
    }

    async login(req: Request, res: Response) {
      console.log("controller1");

        try {
            console.log("controller2");
            const response = await UserServices.login(req.body)
            console.log("controller3");
            return res.status(200).json(response)
            
        } catch (err) {
            return res.status(500).json({ error: "Failed login users!"})
        }
    }
}

export default new UserController()