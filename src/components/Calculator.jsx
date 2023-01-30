import React from 'react'
import useCalculator from '../context/UseCalculator.jsx'
import { useEffect, useState } from 'react'
import dollar from '../img/icon-dollar.svg'

const Calculator = () => {

const [btnReset, setBtnReset] = useState(false)
const [boleta, setBoleta] = useState({})
    
const {bill, setBill, tip, setTip, calcularPropina, propina, setPropina, totalPagar, setTotalPagar, reset, persons, setPersons, totalPerson, tipPerPerson} = useCalculator()

useEffect(() => {
 calcularPropina()
setBtnReset(true)


}, [tip, propina])






  return (
    <div className='bg-white w-1/2 h-2/4 m-auto flex rounded-2xl contenedor-principal'>
        <div className='flex flex-col w-2/5 mx-auto  gap-6 h-5/6 my-auto container-1'>
            <p className='text-xs'>Bill</p>
          
            <input  className='input bill p-2 rounded-lg' placeholder='0' onChange={(e) => setBill(parseInt(e.target.value))} type="number" />
           
            <div>
                <p className='text-xs'>Select Tip %</p>
                <div className='grid grid-cols-3 gap-4 mt-4'>
                    <button className='tip p-2 rounded-lg' onClick={(e) => setTip(5)} value={5}>5%</button>
                    <button className='tip p-2 rounded-lg' onClick={(e) => setTip(10)} value={10}>10%</button>
                    <button className='tip p-2 rounded-lg' onClick={(e) => setTip(15)} value={15}>15%</button>
                    <button className='tip p-2 rounded-lg' onClick={(e) => setTip(20)} value={20}>20%</button>
                    <button className='tip p-2 rounded-lg' onClick={(e) => setTip(25)} value={25}>25%</button>
                </div>
            </div>
            <div>
                <p className='text-xs'>Number of People</p>
                <input className='input w-full person p-2 rounded-lg' placeholder='0' onChange={(e) => setPersons(parseInt(e.target.value))} type="number" />
            </div>
        </div>
        <div className='w-2/5 mx-auto container-2 h-5/6 my-auto rounded-xl flex flex-col justify-between pt-6 pb-6'>
            <div className='flex justify-between  w-4/5 mx-auto '>
                <div className='flex flex-col'>
            <p className='text-white'>Tip Amount: </p><span>/per person</span></div> <span className='texto-cyan'>{tipPerPerson > 1? tipPerPerson : "$0.00"} </span>
           
            </div>
            <div className='flex justify-between w-4/5 mx-auto '>
                <div className="flex flex-col">
            <p className='text-white '>Total </p>  <span>/per person</span></div> <span className='texto-cyan'>{ totalPerson> 1 ? totalPerson : "$0.00" }</span>
            
            </div>
            <div className='w-4/5 mx-auto flex justify-between'>
                <p>Total a Pagar: </p><span>{totalPagar > 1 ? totalPagar : "$0.00"}</span>
                </div>

         
            <button className='w-4/5 mx-auto reset py-3 px-8 rounded-lg' onClick={reset}>Reset</button>
          
           
            
        </div>
    </div>
  )
}

export default Calculator