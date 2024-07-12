import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { productValidation } from "./product.validation";
import { productController } from "./product.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(productValidation.ProductValidationSchema),
  productController.createProduct
);

router.get("/", productController.getAllProducts);
router.put("/:id", productController.updateProduct);

export const ProductRoutes = router;
