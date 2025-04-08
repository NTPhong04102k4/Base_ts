import { NextFunction, Request, Response } from "express";
import { AuthService, iAuthService } from "./auth-service";

export class AuthController {
  private authService: iAuthService;
  constructor() {
    this.authService = new AuthService();
  }

  public register = async (req: Request, res: Response, next: NextFunction) => {
    let input = req.body;
    let _res = await this.authService.register(input);
    return _res;
  };
}

export default new AuthController();
