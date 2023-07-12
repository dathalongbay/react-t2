import {useState} from 'react'
import './Calc.css';

function Calc(props) {

    let [operator, setOperator] = useState('');
    let [firstNumber, setFirstNumber] = useState('');
    let [secondNumber, setSecondNumber] = useState('');
    let [input, setInput] = useState('');


    const appendNumber = (number) => {
        //alert(number);

        let newInput = input + number;
        setInput(newInput);
    }


    // JSX
    return (
        <>
            <div className="calculator">
                <div className="input" id="input">{input}</div>
                <div className="buttons">
                    <div className="operators">
                        <div className="operator">+</div>
                        <div className="operator">-</div>
                        <div className="operator">*</div>
                        <div className="operator">/</div>
                    </div>
                    <div className="leftPanel">
                        <div className="numbers">
                            <div className="calc-number" onClick={() => appendNumber(7)}>7</div>
                            <div className="calc-number" onClick={() => appendNumber(8)}>8</div>
                            <div className="calc-number" onClick={() => appendNumber(9)}>9</div>
                        </div>
                        <div className="numbers">
                            <div className="calc-number" onClick={() => appendNumber(4)}>4</div>
                            <div className="calc-number" onClick={() => appendNumber(5)}>5</div>
                            <div className="calc-number" onClick={() => appendNumber(6)}>6</div>
                        </div>
                        <div className="numbers">
                            <div className="calc-number" onClick={() => appendNumber(1)}>1</div>
                            <div className="calc-number" onClick={() => appendNumber(2)}>2</div>
                            <div className="calc-number" onClick={() => appendNumber(3)}>3</div>
                        </div>
                        <div className="numbers">
                            <div className="calc-number" onClick={() => appendNumber(0)}>0</div>
                            <div className="calc-number" onClick={() => appendNumber('.')}>.</div>
                            <div id="clear">C</div>
                        </div>
                    </div>
                    <div className="equal" id="result">=</div>
                </div>
            </div>
        </>
    );
}

export default Calc;