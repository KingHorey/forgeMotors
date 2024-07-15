import { Schema, model, Document } from "mongoose";

interface ICar extends Document {
  name: string;
  year: number;
  propulsion: string;
  maxSpeedInMiles: number;
  maxSpeedInKms: number;
  rangeInMiles: number;
  rangeInKms: number;
  features: string[];
  image: string;
}

const carSchema = new Schema<ICar>({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  propulsion: { type: String, required: true },
  maxSpeedInMiles: { type: Number, required: true },
  maxSpeedInKms: { type: Number, required: true },
  rangeInMiles: { type: Number, required: true },
  rangeInKms: { type: Number, required: true },
  features: { type: [String], required: true },
  image: { type: String, required: true },
});

export const Car = model<ICar>("Car", carSchema); // convert schema to model
