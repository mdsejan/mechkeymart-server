import { z } from "zod";

// Define the Zod schema
const ProductValidationSchema = z.object({
  body: z.object({
    image: z.string().url({ message: "Image must be a valid URL." }),
    name: z.string().nonempty({ message: "Name is required." }),
    brand: z.string().nonempty({ message: "Brand is required." }),
    availableQuantity: z
      .number()
      .int({ message: "Available quantity must be an integer." })
      .nonnegative({ message: "Available quantity must be zero or positive." }),
    price: z.number().positive({ message: "Price must be a positive number." }),
    rating: z
      .number()
      .min(0, { message: "Rating must be at least 0." })
      .max(5, { message: "Rating must be at most 5." }),
    description: z.string().nonempty({ message: "Description is required." }),
  }),
});

export const productValidation = {
  ProductValidationSchema,
};
