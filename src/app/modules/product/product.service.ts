import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

// ===> Create Product Into DB <===
const createProductIntoDb = async (payload: IProduct) => {
  if (!payload) {
    throw new Error("Data is undefined or null");
  }

  const result = await ProductModel.create(payload);
  return result;
};

// ===> Get All Product From DB <===
const getBookingsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

// ===> Update Product Into DB <===
const updateProductIntoDB = async (id: string, payload: Partial<IProduct>) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const productServices = {
  createProductIntoDb,
  getBookingsFromDB,
  updateProductIntoDB,
};
