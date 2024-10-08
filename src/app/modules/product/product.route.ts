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

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export const ProductRoutes = router;
