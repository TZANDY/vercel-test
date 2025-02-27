import { ProductForm } from "@/components/product-form";
import { db } from "@/db";
import { categoriesTable,sizesTable } from "@/db/schema";

export default async function Page() {
  const categories = await db.select().from(categoriesTable);
  const sizes = await db.select().from(sizesTable);

  if(categories.length === 0){
    console.log("No categories found");
  }

  return (
    <div>
      {categories.length === 0 ? (
        <div>No categories found</div>
      ) : (
        <ProductForm categories={categories} sizes={sizes} />
      )}
    </div>
  );
}