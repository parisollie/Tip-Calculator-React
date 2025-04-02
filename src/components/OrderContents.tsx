import { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"


//Paso 2.10
type OrderContentsProps = {
    order: OrderItem[],
    //Paso 5.16
    dispatch: Dispatch<OrderActions>

}

/*
  V-118 paso 2.7, creamos el archivo OrderContents  y extraemos order y es de tipo : OrderContentsProps
  paso 5.17, le ponemos el dispatch
*/
export default function OrderContents({ order, dispatch }: OrderContentsProps) {

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
                            //paso 5.18
                            onClick={() => dispatch({ type: 'remove-item', payload: { id: item.id } })}
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
