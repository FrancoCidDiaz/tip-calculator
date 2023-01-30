import { useContext } from "react";
import CalculatorContext from "./CalculatorProvider.jsx";

const useCalculator = () => {

    return useContext(CalculatorContext)

}

export default useCalculator