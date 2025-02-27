import CardProduct from "@/components/card-product";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { categoriesTable } from "@/db/schema";
import Link from "next/link";

export default async function Page() {
  // 1. fetch all categories from database
  const categories = await db.select().from(categoriesTable);
  // 2. display empty lis if no categories
  

  return (
    <div className="flex flex-col gap-4">
      {/* <h1 className="text-xl">Productos</h1> */}
      <div>
        <Link href="/dashboard/products/new">
          <Button>Nuevo</Button>
        </Link>
      </div>
      <div>
        {categories.length === 0 && <div>No categories found</div>}

        {categories.length > 0 &&
          categories.map((category) => (
            <Link key={category.id} href={`/dashboard/products/${category.id}`}>
              <Button>{category.name}</Button>
            </Link>
          ))}

        <Link href={`/dashboard/products/new`}>
          <Button>Agregar categoria</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <CardProduct />
      </div>
    </div>
  );
}
