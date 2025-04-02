//Vid 127
import { useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

//Vid 122
type OrderTotalsProps = {
    order: OrderItem[],
    //Vid 125
    tip: number,
    //Vid 128
    placeOrder: () => void
}

//Vid 122, le pasamos  el OrderTotalProps : {order, tip, placeOrder} : OrderTotalsProps
//Vid 125, le pasamos el tip
//Vid 128, extraemos placeOrder
export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

    //Vid 122
    //Uno es el total y el otro sobre el cual estamos operando  (total, item)
    const subtotalAmount = useCallback(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0 ) , [order])
    //Vid 125 ,quiero que se ejecute cuando cambie la propina y la orden
    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])
    //Vid 126
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])

    //Vid 121
    return (
        <>
        
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">{ formatCurrency(subtotalAmount()) }</span>
                </p>
                <p>Propina: {''}
                    <span className="font-bold">{ formatCurrency(tipAmount()) }</span>
                </p>
                <p>Total a Pagar: {''}
                    <span className="font-bold">{ formatCurrency(totalAmount()) }</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" 
                disabled={totalAmount() === 0}
                //Vid 128
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}
