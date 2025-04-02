import type { MenuItem } from "../types";

//V-112,paso 1.8
type MenuItemProps = {
  //ese item será tipo MenuItem.
  item: MenuItem,
  //V-115,Paso 2.0 le pasamos un prop,por lo regular siempre serán igual.Va ser tipo MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItem(
  {
    item,
    //Paso 1.16,le pasamos el addItem
    addItem
    //Paso 1.9, : MenuItemProps es el que se le va asignar
  }: MenuItemProps) {

  return (
    //Paso 1.11,Le ponemos un botón
    <button
      className=' border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg  rounded-lg flex justify-between w-full'
      //Paso 1.18, le pasamos el addItem
      onClick={() => addItem(item)}
    >
      {/**Paso 1.10,le pasamos el nombre */}
      <p>{item.name}</p>
      <p className='font-black'>${item.price}mx</p>
    </button>
  )
}
