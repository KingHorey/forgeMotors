import { UUID } from "mongodb";
import { Schema, model, Document, Types } from "mongoose";

interface PurchaseOrder extends Document {
  userId: Types.ObjectId;
  carId: Types.ObjectId;
  quantity: number;
  amount: number;
  purchaseDate: Date;
  orderId: UUID;
}

const purchaseOrder = new Schema<PurchaseOrder>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  carId: { type: Schema.Types.ObjectId, ref: "Car", required: true },
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true },
  purchaseDate: { type: Date, required: true },
  orderId: { type: UUID, required: true },
});

export const purchase = model<PurchaseOrder>("PurchaseOrder", purchaseOrder); // convert schema to model
