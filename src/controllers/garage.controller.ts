import { NextFunction, Request, Response } from "express";
import GarageItem from "../models/GarageItem";
import { IGarageItem } from "../types/IGarageItem";

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

    async createGarage(req: Request, res: Response, next: NextFunction) {
        try {
            const garageItem = req.body;

            //const newGarage = await addGarageItem(garageItem);
            const garage = new GarageItem({
                _id: garageItem._id,
                mispar_mosah: garageItem.mispar_mosah,
                shem_mosah: garageItem.shem_mosah,
                cod_sug_mosah: garageItem.cod_sug_mosah,
                sug_mosah: garageItem.sug_mosah,
                ktovet: garageItem.ktovet,
                yishuv: garageItem.yishuv,
                telephone: garageItem.telephone,
                mikud: garageItem.mikud,
                cod_miktzoa: garageItem.cod_miktzoa,
                miktzoa: garageItem.miktzoa,
                menahel_miktzoa: garageItem.menahel_miktzoa,
                rasham_havarot: garageItem.rasham_havarot,
                TESTIME: garageItem.TESTIME
            });

            const newGarage = await garage.save();
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


    async addGarageItem(garageItem: IGarageItem) {
        try {
            const garage = new GarageItem({
                _id: garageItem._id,
                mispar_mosah: garageItem.mispar_mosah,
                shem_mosah: garageItem.shem_mosah,
                cod_sug_mosah: garageItem.cod_sug_mosah,
                sug_mosah: garageItem.sug_mosah,
                ktovet: garageItem.ktovet,
                yishuv: garageItem.yishuv,
                telephone: garageItem.telephone,
                mikud: garageItem.mikud,
                cod_miktzoa: garageItem.cod_miktzoa,
                miktzoa: garageItem.miktzoa,
                menahel_miktzoa: garageItem.menahel_miktzoa,
                rasham_havarot: garageItem.rasham_havarot,
                TESTIME: garageItem.TESTIME
            });

            const savedGarage = await garage.save();
            return savedGarage;

        } catch (error) {
            console.log(error);
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
