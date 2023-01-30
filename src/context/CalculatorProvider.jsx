import { useState, useEffect, createContext} from "react";


const CalculatorContext = createContext()

const CalculatorProvider = ({children}) => {

const [bill, setBill] = useState(0)
const [tip, setTip] = useState(0)
const [propina, setPropina] = useState(0)
const [totalPagar, setTotalPagar] = useState(0)
const [totalPerson, setTotalPerson] = useState(0)
const [tipPerPerson, setTipPerPerson] = useState(0)
const [persons, setPersons] = useState(0)


useEffect(() => {
  setTotalPerson(Math.trunc(totalPagar/persons))
   setTipPerPerson(Math.trunc(propina/persons))
}, [persons])



const calcularPropina = () => {
    if (bill === 0 || tip === 0) {
        return;
        }
 setPropina(bill* (tip/100))
 
  setTotalPagar(Math.trunc(eval(bill+propina) ))
}


const reset = () => {
    setBill(0)
    setPropina(0)
    setTip(0)
   setTotalPagar(0) 
   setTipPerPerson(0)
   setTotalPerson(0)
    
}
return (
<CalculatorContext.Provider
value={{
bill,
setBill,
tip,
setTip,
totalPerson,
setTotalPerson,
tipPerPerson,
setTipPerPerson,
persons,
setPersons,
calcularPropina,
propina,
setPropina,
totalPagar,
setTotalPagar,
reset
}}>
  


  {children}
</CalculatorContext.Provider>
)

}



export {
    CalculatorProvider
}

export default CalculatorContext