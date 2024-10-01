import { NextFunction, Request, Response } from "express";
import GarageItem from "../models/GarageItem";
import axios from "axios";
import { IGarageItem } from "../types/IGarageItem";
import Utils from "../utils/garageUtils";

export default class GarageController {

    // , next: NextFunction
    async getAllGarages(req: Request, res: Response, next: NextFunction) {
        {
            try {
                const getGarages = await GarageItem.find();
                //.select("_id title description vote createdAt updatedAt")
                //.populate("user", "username name surname");

                if (getGarages) {
                    res.status(200).json(getGarages);
                } else {
                    return next(
                        res.status(404).json({
                            message: "Not found.",
                        })
                    );
                }
            } catch (error: any) {
                console.log(error);
                next(error);
            }
        };
    }

    async createAllGarages(req: Request, res: Response, next: NextFunction) {
        const url = "https://data.gov.il/api/3/action/datastore_search?resource_id=bb68386a-a331-4bbc-b668-bba2766d517d&limit=5"
        const garages = await axios(url);
        const records = garages.data.result.records;

        await Promise.all(records.map(async (garage: IGarageItem) => {
            await new Utils().addGarageItem(garage);
        }));

        res.status(201).json({
            message: "create OK"
        });    
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
        } catch (error) {
            console.log(error);
            next(error);
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
