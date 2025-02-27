import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface Product {
    id: number;
    name: string;
    description: string;
}

export default async function CardProduct() {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();
  return (
    <>
      {
        products.length === 0 && (
          <div>No products found</div>
        )
      }
      {
        products.length > 0 &&

      products.map((product: Product) => {
        return (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button>
                <X size={24} />
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
}