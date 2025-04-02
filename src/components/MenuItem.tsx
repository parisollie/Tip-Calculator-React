//Vid 112 
import type {  MenuItem } from "../types";

type MenuItemProps = {
  //Vid 112, ese item será tipo MenuItem.
  item: MenuItem,
  //Vid 115, le pasamos un prop,por lo regular siempre serán igual.Va ser tipo Menu Item
  addItem: (item: MenuItem) => void
}
//Vid 112, : MenuItemProps es el que se le va asignar.VId 114, extraigo addItem
export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    //Vid 112 ,Le ponemos un evento de boton
      <button 
        className=' border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg  rounded-lg flex justify-between w-full'
        //Vid 114
        onClick={() => addItem(item)}
      > 
  
          <p>{item.name}</p> 
          <p className='font-black'>${item.price}</p>
      </button>
  )
}
