import { Request, Response } from "express";

export default class HomeController{
   async welcome(req: Request, res: Response) {
     res.json({ message: "Welcome to bezkoder application." });
  }  
}

// export function welcome(req: Request, res: Response): Response {
//   return res.json({ message: "Welcome to bezkoder application." });
// }
