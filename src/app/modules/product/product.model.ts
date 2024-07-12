import { Schema, model, Document } from "mongoose";
import { IProduct } from "./product.interface";

// Define the schema
const productSchema = new Schema<IProduct>(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    brand: { type: String, required: true },
    availableQuantity: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    description: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Define the model
export const ProductModel = model<IProduct>("Product", productSchema);
