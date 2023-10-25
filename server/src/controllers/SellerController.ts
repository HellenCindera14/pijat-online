import { Request, Response } from "express";
import SellerService from "../services/SellerService";

class SellerController {
  async find(req: Request, res: Response) {
    try {
      const gender = req.params.gender;
      const { district } = req.query;
      const response = await SellerService.find(gender, district);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: "Cannot get data seller!" });
    }
  }

  async register(req: Request, res: Response) {
    try {
      const response = await SellerService.register(req.body);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: "Failed register seller!" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await SellerService.update(req.body, id);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: "Failed register seller!" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const response = await SellerService.login(req.body);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ error: "Failed login seller!" });
    }
  }
  async check(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const response = await SellerService.check(loginSession);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  // check(req: Request, res: Response) {
  //   SellerService.check(req, res);
  // }
}

export default new SellerController();
