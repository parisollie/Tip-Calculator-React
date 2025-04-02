//Vid 109.Haremos un type
export type MenuItem = {
    id: number,
    name: string,
    price: number
}
//Vid 113 creamos un nuevo type
export type OrderItem = MenuItem & {
    quantity: number
}