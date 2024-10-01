import { NextFunction, Request, Response } from "express";
import GarageItem from "../models/GarageItem";
import axios from "axios";
import { IGarageItem } from "../types/IGarageItem";
import Utils from "../utils/garageUtils";
import { URL } from "../config"

export default class GarageController {
    async getAllGarages(req: Request, res: Response, next: NextFunction) {
        {
            try {
                const getGarages = await GarageItem.find();
                if (getGarages) {
                    res.status(200).json(getGarages);
                } else {
                    return next(
                        res.status(404).json({
                            message: "Not found.",
                        })
                    );
                }
            } catch (err) {
                console.log(err);
                next(err);
            }
        };
    }

    async getAllAPIGarages(req: Request, res: Response, next: NextFunction) {
        try {
            const garages = await axios(URL);
            res.json({ data: garages.data.result.records, status: "success" });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }

    async createAllGarages(req: Request, res: Response, next: NextFunction) {
        try {
            const garages = await axios(URL);
            const records = garages.data.result.records;

            await Promise.all(records.map(async (garage: IGarageItem) => {
                await new Utils().addGarageItem(garage);
            }));

            res.status(201).json({
                message: "create OK"
            });
        }
        catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Internal Server Error!"
            });
        }
    }

    async createGarage(req: Request, res: Response, next: NextFunction) {
        try {
            const garageItem = req.body;
            const newGarage = await new Utils().addGarageItem(garageItem);
            if (newGarage) {
                res.status(201).json({
                    newGarage,
                });
            } else {
                return next(
                    res.status(400).json({
                        message: "Invalid details provided.",
                    })
                );
            }
        } catch (err) {
            console.log(err);
            next(err);
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
