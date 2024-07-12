import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productServices } from "./product.service";

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

export const productController = {
  createProduct,
};
