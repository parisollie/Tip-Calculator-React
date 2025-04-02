//Vid 124
import type { Dispatch, SetStateAction } from "react"

//Vid 123
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

type TipPercentageFormProps = {
    //Vid 124, es el tipo de variable que nos da visual,
    setTip: Dispatch<SetStateAction<number>>,
    //Vid 128
    tip: number
}
//Vid 124 {setTip, tip} : TipPercentageFormProps) 
//Vid 128, extraemos tip
export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina:</h3>
        <form>
          
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        //Vid 124 ,con el signo + lo convierte a number
                        onChange={ e => setTip(+e.target.value)}
                        //Vid 128,para revisar cuando este habilitado
                        checked={tipOption.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
