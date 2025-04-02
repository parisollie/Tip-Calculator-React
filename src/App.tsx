import { useReducer } from "react"
import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-reducer"

function App() {

  //Paso 5.4
  const [state, dispatch] = useReducer(orderReducer, initialState)


  return (
    <>
      {/**V-108,paso 1.2 Padding py, significa arriba y abajo. */}
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      {/**V-110,paso 1.6 Sección principal del proyecto ,auto es central horizontalmente*/}
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">

        {/**ESta es mi primera columna */}
        <div className='p-5'>
          <h2 className='font-black text-4xl'>Menú</h2>
          {/**Paso 1.12, agregamos una separacion */}
          <div className='mt-10 space-y-3'>
            {/**V-111,paso 1.7,renderizamos los elementos*/}
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                //Paso 1.17, le pasamos el addItem
                //addItem={addItem}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        {/**Esta es mi otra columna,la de consumo*/}
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {/**Paso 4.13  si la orden es mayor a 0 
           * Paso 5.12, le ponemos el state
          */}
          {state.order.length ? (
            <>
              {/** Paso 2.9,llamamos a nuestro componente OrderContents */}
              <OrderContents
                order={state.order}
                //Paso 5.15
                dispatch={dispatch}

              />
              {/**Paso 3.8, */}
              <TipPercentageForm
                //paso 5.20
                dispatch={dispatch}
                //paso 4.10
                tip={state.tip}

              />

              {/**V-121, Paso 3.0 llamamos a OrderTotals */}
              <OrderTotals
                //V-122 paso 3.2 y paso 5.13,le pasamos el state
                order={state.order}
                //V-125,paso 3.16
                tip={state.tip}
                //paso 4.5
                dispatch={dispatch}
              />
            </>
          ) : (
            //Paso 4.14
            <p className="text-center">La orden esta vacia</p>
          )}


        </div>
      </main>

    </>
  )
}

export default App
