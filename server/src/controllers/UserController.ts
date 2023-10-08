import { Request, Response } from "express";
import UserServices from "../services/UserServices";

class UserController {
  async find(req: Request, res: Response) {
    try {
      const gender = req.params.gender;
      const response = await UserServices.find(gender);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: "Cannot get data seller!" });
    }
  }
  async check(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const response = await UserServices.check(loginSession);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const response = await UserServices.register(req.body);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: "Failed register users!" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const response = await UserServices.login(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
