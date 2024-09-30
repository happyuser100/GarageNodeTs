import { NextFunction, Request, Response } from "express";
import GarageItem from "../models/GarageItem";

export default class GarageController {

    // , next: NextFunction
    async getAllGarages (req: Request, res: Response) 
    {
        try {
            const getGarages = await GarageItem.find();
            //.select("_id title description vote createdAt updatedAt")
            //.populate("user", "username name surname");

            if (getGarages) {
                res.status(200).json(getGarages);
            } else {
                // return next(
                //     res.status(404).json({
                //         message: "Not found.",
                //     })
                // );
            }
        } catch (error: any) {
            if (error.isJoi === true) {
                // return next(
                //     res.status(400).json({
                //         message: "Invalid details provided.",
                //     })
                // );
            }
            //next(error);
        }
    };

    async create(req: Request, res: Response) {
        try {
            res.status(201).json({
                message: "create OK",
                reqBody: req.body
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            res.status(200).json({
                message: "findAll OK"
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }

    async findOne(req: Request, res: Response) {
        try {
            res.status(200).json({
                message: "findOne OK",
                reqParamId: req.params.id
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }

    async update(req: Request, res: Response) {
        try {
            res.status(200).json({
                message: "update OK",
                reqParamId: req.params.id,
                reqBody: req.body
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            res.status(200).json({
                message: "delete OK",
                reqParamId: req.params.id
            });
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }
}
