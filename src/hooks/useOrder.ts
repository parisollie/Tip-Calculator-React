import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

//V-113,paso 1.13 creamos el use order
export default function useOrder() {
    /*
       <> generic le pasamos el tipo de dato OrderItem
       Paso 1.15,Es un arreglo pero tendrá esas propiedades
    */
    const [order, setOrder] = useState<OrderItem[]>([])

    //Vid 124,nuestras propinas.La propina inicial es 0,
    const [tip, setTip] = useState(0)

    //V-114,paso 1.16 creamos el  addItem ,ese va a tomar un elemento y será tipo de dato MenuItem
    const addItem = (item: MenuItem) => {
        //Vid 117 ,find encuentra un elemento , ese elemento en nuestra orden es igual al elemento que existe 
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        //Vid 117, Si ta lo encuentra
        if (itemExist) {
            /*
              Vid ,usamos map,accedemos a cada uno de los elementos,order Item es variable temporal, lo comparamos con el id
              que agregamos a nuestra orden,ya sabe que existe pero debe encontrar cual es
            */
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                //Vid 117, tomamos una copia, pero en la propiedad de cantidad lo aumenta a uno.
                { ...orderItem, quantity: orderItem.quantity + 1 } :
                orderItem
            )
            //Vid 117, y seteamos la orden 
            setOrder(updatedOrder)
        } else {
            //Vid 116 guardo una copia , la primera vez que yo presiono es 1
            const newItem = { ...item, quantity: 1 }
            //Vid 116,
            setOrder([...order, newItem])
        }
    }

    //Vid 120 , le pasamos el id a eliminar.
    const removeItem = (id: MenuItem['id']) => {
        //Vid 120, seteamos el componente y accedemos es diferente al id que le estoy pasando
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        //Vid 128
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}