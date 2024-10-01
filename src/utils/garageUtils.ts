import GarageItem from "../models/GarageItem";
import { IGarageItem } from "../types/IGarageItem";

export default class Utils {
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
}

