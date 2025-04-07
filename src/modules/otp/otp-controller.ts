import { NextFunction, Request, Response } from "express";
import { IOtpService, OtpService } from "./otp-service";

class OtpController {
  private OtpService: IOtpService;
  constructor() {
    this.OtpService = new OtpService();
  }

  public save = async (req: Request, res: Response, next: NextFunction) => {
    let input = req.body;
    return await this.OtpService.save(input);
  };
}

export default new OtpController();
