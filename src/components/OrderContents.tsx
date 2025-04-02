import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

//Paso 2.10
type OrderContentsProps = {
    order: OrderItem[],
    /*
      Paso 2.20, le paso el nombre de mi Prop : removeItem: y es una funcion que no devuelve nada.
      Toma un id deMenuItem['id']
    */
    removeItem: (id: MenuItem['id']) => void
}

/*
  V-118 paso 2.7, creamos el archivo OrderContents  y extraemos order y es de tipo : OrderContentsProps
  Paso 2.17 ,extraemos removeItem
*/
export default function OrderContents({ order, removeItem }: OrderContentsProps) {

    return (
        <div>
            {/** Paso 2.8 ponemos consumo */}
            <h2 className='font-black text-4xl'>Consumo</h2>

            {/**Paso 2.11 */}
            <div className="space-y-3 mt-10">

                {order.map(item => (
                    <div
                        key={item.id}
                        //border-t -> border top
                        className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                    >
                        {/** V-119,Paso 2.12 */}
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>

                        {/** Paso 2.14 */}
                        <button
                            className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                            //Paso 2.18, le pasamos el removeItem
                            onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
