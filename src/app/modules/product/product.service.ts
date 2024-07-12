import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDb = async (payload: IProduct) => {
  if (!payload) {
    throw new Error("Data is undefined or null");
  }

  const result = await ProductModel.create(payload);
  return result;
};

export const productServices = {
  createProductIntoDb,
};
