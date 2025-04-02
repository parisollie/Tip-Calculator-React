import { MenuItem, OrderItem } from "../types";

export type OrderActions =
    //V-182,Paso 5.0
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem['id'] } } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: { value: number } }

//Paso 5.1
export type OrderState = {
    //VID 189
    order: OrderItem[],
    tip: number
}

//Paso 5.2
export const initialState: OrderState = {
    order: [],
    tip: 0
}

//Paso 5.3
export const orderReducer = (
    //Vid 182
    state: OrderState = initialState,
    action: OrderActions
) => {

    if (action.type === 'add-item') {

        //paso 5.5
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        //paso 5.6
        let order: OrderItem[] = []

        //Vid 117, Si ta lo encuentra
        if (itemExist) {
            order = state.order.map(orderItem => orderItem.id === action.payload.item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 } :
                orderItem
            )

        } else {
            //Vid 116 guardo una copia , la primera vez que yo presiono es 1
            const newItem = { ...action.payload.item, quantity: 1 }
            //Paso 5.7
            order = [...state.order, newItem]
        }

        return {
            ...state,
            //Paso 5.8
            order
        }
    }

    //V-185,paso 5.14
    if (action.type === 'remove-item') {
        const order = state.order.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            order
        }
    }

    //V-187,paso 5.23
    if (action.type === 'place-order') {
        return {
            ...state,
            //Vid 128
            order: [],
            tip: 0
        }
    }

    //V-186,paso 5.19
    if (action.type === 'add-tip') {

        const tip = action.payload.value
        return {
            ...state,
            tip
        }
    }
    //Vid 182, copia del state
    return state
}