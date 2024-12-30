import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

const sizes = [{
    id: 1,
    name: "Pequeño",
    price: 100,
    stock: 10
    },
    {
    id: 2,
    name: "Mediano",
    price: 200,
    },
    {
    id: 3,
    name: "Grande",
    price: 300,
    stock: 5
    },
    {
    id: 4,
    name: "Extra grande",
    price: 400,
    stock: 0
    }
    ];

export default function Page() {
  return (
    <div>
      <h1>Nuevo</h1>
      <div>
        <form className="flex flex-col gap-4">
          <Input placeholder="Nombre del producto" />
          <Textarea placeholder="Type your message here." />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecciona talla" />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size.id} value={size.id.toString()}>
                  {size.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="grid grid-cols-2 gap-4">
          <Input placeholder="Precio" />
          <Input placeholder="Stock" />
          </div>
          <Button>Guardar</Button>
        </form>
      </div>
    </div>
  );
}