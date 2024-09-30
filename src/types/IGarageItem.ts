import { Document } from "mongoose";

export interface IGarageItem extends Document {
  username: string;
  name: string;
  surname: string;
}