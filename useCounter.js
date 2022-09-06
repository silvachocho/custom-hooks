import { useState } from "react"

export const useCounter = (valorInicial = 10) => {
  
    const [counter, setCounter] = useState(valorInicial);

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if (counter === 0) return;
        
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(valorInicial);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }


}
