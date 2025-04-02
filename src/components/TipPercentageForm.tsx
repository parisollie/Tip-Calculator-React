import type { Dispatch, SetStateAction } from "react"

//V-123,paso 3.7
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

//Paso 3.13
type TipPercentageFormProps = {
  //Es el tipo de variable que nos da visual, solo nos ponemos en setTip y nos lo da,
  setTip: Dispatch<SetStateAction<number>>,
  //Paso 4.11
  tip: number
}

/*
  Paso 3.14, le ponemos -> {setTip, tip} : TipPercentageFormProps) 
  extraemos tip
*/
export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {

  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      {/**Paso 3.9 */}
      <form>
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              //paso 3.15,con el signo + lo convierte a number
              onChange={e => setTip(+e.target.value)}
              //Paso 4.12,para revisar cuando este habilitado
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
