import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";
import { categoriesTable } from "@/db/schema";

export const CategorySchema = createInsertSchema(categoriesTable, {
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).min(1).max(255)
});
