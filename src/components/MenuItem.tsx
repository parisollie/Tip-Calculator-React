import { Dispatch } from "react";
import type { MenuItem } from "../types";
import { OrderActions } from "../reducers/order-reducer";

//V-112,paso 1.8
type MenuItemProps = {
  //ese item será tipo MenuItem.
  item: MenuItem,
  //Paso 5.9
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem(
  {
    item,
    //Paso 5.10
    //Paso 1.9, : MenuItemProps es el que se le va asignar
    dispatch
  }: MenuItemProps) {

  return (
    //Paso 1.11,Le ponemos un botón
    <button
      className=' border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg  rounded-lg flex justify-between w-full'
      //Paso 5.11
      onClick={() => dispatch({ type: 'add-item', payload: { item } })}
    >
      {/**Paso 1.10,le pasamos el nombre */}
      <p>{item.name}</p>
      <p className='font-black'>${item.price}mx</p>
    </button>
  )
}
