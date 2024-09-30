import mongoose, { Schema } from "mongoose";
import { IGarageItem } from "../types/IGarageItem";

const GarageItemSchema: Schema = new Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
    },
    mispar_mosah: {
      type: String,
      required: true,
    },
    shem_mosah: {
      type: String,
      required: true,
    },
    cod_sug_mosah: {
        type: Number,
        required: true,
     },
     sug_mosah: {
        type: String,
        required: true,
      },    
      ktovet: {
        type: String,
        required: true,
      },    
      yishuv: {
        type: String,
        required: true,
      },    
      telephone: {
        type: String,
        required: true,
      },    
      mikud: {
        type: Number,
        required: true,
      },    
      cod_miktzoa: {
        type: Number,
        required: true,
      },    
      miktzoa: {
        type: String,
        required: true,
      },    
      menahel_miktzoa: {
        type: String,
        required: true,
      },    
      rasham_havarot: {
        type: Number,
        required: true,
      },
      TESTIME: {
        type: String,
        required: true,
      }     
  },
  { timestamps: true }
);
const GarageItem = mongoose.model<IGarageItem>("Garage", GarageItemSchema);
export default GarageItem;