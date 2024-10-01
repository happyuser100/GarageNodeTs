import { Document } from "mongoose";

export interface IGarageItem extends Document {
  _id: string;
  mispar_mosah: string;
  shem_mosah: string;
  cod_sug_mosah: number;
  sug_mosah: string;
  ktovet: string;
  yishuv: string;
  telephone: string;
  mikud: number;
  cod_miktzoa: number;
  miktzoa: string;
  menahel_miktzoa: string;
  rasham_havarot: number;
  TESTIME: string;
}