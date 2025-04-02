import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()


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
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        {/**Esta es mi otra columna,la de consumo*/}
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

          {order.length ? (
            <>
              <OrderContents
                order={order}
                //Vid 120
                removeItem={removeItem}
              />
              <TipPercentageForm
                setTip={setTip}
                //Vid 128
                tip={tip}
              />
              <OrderTotals
                //Vid 122
                order={order}
                //Vid 125
                tip={tip}
                //Vid 128
                placeOrder={placeOrder}
              />
            </>
          ) : (
            //Vid 128
            <p className="text-center">La orden esta vacia</p>
          )}


        </div>
      </main>

    </>
  )
}

export default App
