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
// const getBookingsFromDB = async () => {
//   const result = await ProductModel.find({ isDeleted: false });
//   return result;
// };

// ===> Get All Products From DB with Filtering, Searching, and Sorting <===
const getProductsFromDB = async (query: any) => {
  const { search, brand, minPrice, maxPrice, sortBy } = query;

  // Build the filter object
  const filter: any = { isDeleted: false };

  if (search) {
    filter.$or = [
      { name: { $regex: search, $options: "i" } },
      { brand: { $regex: search, $options: "i" } },
    ];
  }

  if (brand) {
    filter.brand = { $regex: brand, $options: "i" };
  }

  if (minPrice) {
    filter.price = { ...filter.price, $gte: parseFloat(minPrice) };
  }

  if (maxPrice) {
    filter.price = { ...filter.price, $lte: parseFloat(maxPrice) };
  }

  // Build the sort object
  let sort: any = {};
  if (sortBy) {
    if (sortBy === "priceAsc") {
      sort.price = 1;
    } else if (sortBy === "priceDesc") {
      sort.price = -1;
    }
  }

  const result = await ProductModel.find(filter).sort(sort);
  return result;
};

// ===> Update Product Into DB <===
const updateProductIntoDB = async (id: string, payload: Partial<IProduct>) => {
  const result = await ProductModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// ===> Delete a Product <===
const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const productServices = {
  createProductIntoDb,
  getProductsFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
