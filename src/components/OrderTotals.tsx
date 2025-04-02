import { Dispatch, useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

//Paso 3.3
type OrderTotalsProps = {
    order: OrderItem[],
    //Paso 3.18
    tip: number,
    //Paso 5.24
    dispatch: Dispatch<OrderActions>
}

/*
   Paso 3.4, le pasamos  el  "OrderTotalProps"
   Paso 3.17, le pasamos el tip

*/
export default function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {

    /*
       Paso 3.5
       Uno es el total y el otro sobre el cual estamos operando  (total, item)
       V-127,paso 4.2 usa CallBack
    */
    const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    //Paso 3.19 ,quiero que se ejecute cuando cambie la propina y la orden
    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
    //V-126,paso 4.0
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])

    return (
        <>
            {/**Paso 3.1 */}
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    {/**Paso 3.6, le ponemos el subtotalAmount*/}
                    <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
                </p>
                <p>Propina: {''}
                    {/**Paso 3.20, le ponemos el tipAmount*/}
                    <span className="font-bold">{formatCurrency(tipAmount())}</span>
                </p>
                <p>Total a Pagar: {''}
                    {/**Paso 4.1, le ponemos el totalAmount*/}
                    <span className="font-bold">{formatCurrency(totalAmount())}</span>
                </p>
            </div>

            {/**V-128,paso 4.3 */}
            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                //estra deshabilitado si la cantidad es 0
                disabled={totalAmount() === 0}
                //Paso 5.25
                onClick={() => dispatch({ type: 'place-order' })}
            >
                Guardar Orden
            </button>
        </>
    )
}
