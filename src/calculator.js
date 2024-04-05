import React from 'react';
import { useState } from "react";
import './calculator.css';

const Calculator = () => {
    const [input, setinput] = useState('')

    const handleInput = (e) => {
        setinput(input + e.target.value)
    }
    const handleClear = () => {
        setinput('')
    }
    const handleCalculate = () => {
        setinput(eval(input));
    }
    const handleslice = () => {
        setinput(input.slice(0, -1));

    }

    return (
        <main>
            <div class="screen">{input}</div>
            <div class="buttons">
                <button onClick={handleClear}>AC</button>
                <button onClick={handleslice}>DE</button>
                <button onClick={handleInput} value=".">.</button>
                <button onClick={handleInput} value="/">/</button>
                <button onClick={handleInput} value="7">7</button>
                <button onClick={handleInput} value="8">8</button>
                <button onClick={handleInput} value="9">9</button>
                <button onClick={handleInput} value="*">*</button>
                <button onClick={handleInput} value="4">4</button>
                <button onClick={handleInput} value="5">5</button>
                <button onClick={handleInput} value="6">6</button>
                <button onClick={handleInput} value="-">-</button>
                <button onClick={handleInput} value="1">1</button>
                <button onClick={handleInput} value="2">2</button>
                <button onClick={handleInput} value="3">3</button>
                <button onClick={handleInput} value="+">+</button>
                <button onClick={handleInput} value="00">00</button>
                <button onClick={handleInput} value="0">0</button>
                <button id="equal" onClick={handleCalculate}>=</button>
            </div>
        </main>
    )
}


export default Calculator