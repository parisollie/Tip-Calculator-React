//Paso 1.4 ,Haremos un type
export type MenuItem = {
    id: number,
    name: string,
    price: number
}
//Paso 1.14, creamos un nuevo type
export type OrderItem = MenuItem & {
    quantity: number
}