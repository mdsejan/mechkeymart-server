import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productServices } from "./product.service";
import noDataFound from "../../error/noDataFound";

// ===> Create Product <===
const createProduct = catchAsync(async (req, res) => {
  const data = req.body;

  if (!data) {
    throw new Error("Data is invalid or null");
  }

  const result = await productServices.createProductIntoDb(data);

  if (!result) {
    throw new Error("Product Not created");
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});

// ===> Get All Products <===
const getProductById = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await productServices.getProductByIdFromDB(id);

  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product Get successfully",
    data: result,
  });
});

// ===> Get Products with Filtering, Searching, and Sorting <===
const getProducts = catchAsync(async (req, res) => {
  const query = req.query;

  const result = await productServices.getProductsFromDB(query);

  if (!result || result.length === 0) {
    return noDataFound(res);
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully",
    data: result,
  });
});

// ===> Update Product By Id <===
const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await productServices.updateProductIntoDB(id, req.body);

  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product updated successfully",
    data: result,
  });
});

// ===> Delete a Product <===
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new Error("Data is invalid or null");
  }
  const result = await productServices.deleteProductFromDB(id);
  if (!result) {
    return noDataFound(res);
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Product deleted successfully",
    data: result,
  });
});

export const productController = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
