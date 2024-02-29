import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

const validator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
      });
      return next();
    } catch (error: any) {
      return res
        .status(400)
        .json(error.issues.map((issue: any) => issue.message));
    }
  };

export default validator;
