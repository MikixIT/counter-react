import "./Counter.css";
import { useState } from "react";      

function Counter() {

    let [counterClick, setCounterClick] = useState(0);
    const increment = () => {
       setCounterClick(counterClick+1)
    }
    const decrement = () => {
        setCounterClick(counterClick-1)
    }
    return (
        <div className="container">
            <h1>{counterClick}</h1>
            <div className="buttons-container">
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
  ) 
}

export default Counter;
