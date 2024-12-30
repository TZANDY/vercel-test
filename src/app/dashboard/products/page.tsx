import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { X } from "lucide-react";
import Link from "next/link";
  
const data = [
    {
        id: 1,
        name: "Producto 1",
        price: 100,
        stock: 10
    },
    {
        id: 2,
        name: "Producto 2",
        price: 200,
    },
    {
        id: 3,
        name: "Producto 3",
        price: 300,
        stock: 5
    },
    {
        id: 4,
        name: "Producto 4",
        price: 400,
        stock: 0
    }
    ];


export default function Page(){
    return (
      <div className="flex flex-col gap-4">
        {/* <h1 className="text-xl">Productos</h1> */}
        <div>
            <Link href="/dashboard/products/new">
                <Button>Nuevo producto</Button>
            </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>
                    <div className="flex justify-between">
                    {product.name}
                    <Button className="dark: bg-red-500">
                    <X />
                    </Button>
                    </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Precio: {product.price}
                </CardDescription>
                
                <CardDescription>
                  Stock: {product.stock || "No disponible"}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button>Editar</Button>
              </CardFooter>
            </Card>
          ))}
          </div>
      </div>
    );
}