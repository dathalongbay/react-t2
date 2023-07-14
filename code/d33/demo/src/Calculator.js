import { useState, useEffect } from 'react';
import './Calculator.css';

const Calculator = () => {
    let [input, setInput] = useState('');
    let [result, setResult] = useState('');
    let [operator, setOperator] = useState('');
    let [firstNumber, setFirstNumber] = useState('');
    let [secondNumber, setSecondNumber] = useState('');

    useEffect(() => {
        if (firstNumber && secondNumber && operator) {
            let newResult = 0;
            switch (operator) {
                case '+':
                    newResult = parseFloat(firstNumber) + parseFloat(secondNumber);
                    break;
                case '-':
                    newResult = parseFloat(firstNumber) - parseFloat(secondNumber);
                    break;
                case '*':
                    newResult = parseFloat(firstNumber) * parseFloat(secondNumber);
                    break;
                case '/':
                    newResult = parseFloat(firstNumber) / parseFloat(secondNumber);
                    break;
                default:
                    newResult = '';
            }

            setInput(newResult);
            setResult(newResult);
        }
    }, [secondNumber]);

    useEffect(() => {
        if (result != '') {
            setOperator('');
            setFirstNumber('');
            setSecondNumber('');
        }
    }, [result]);


    const appendNumber = (number) => {
        let newInput = input + '' + number;
        setInput(newInput);
    }

    const makeOperator = (op) => {
        setOperator(op);
        setFirstNumber(input);
        setInput('');
    }

    const calculate = () => {
        setSecondNumber(input); 
    }

    const clearResult = () => {
        setInput('');
        setOperator('');
        setFirstNumber('');
        setSecondNumber('');
    }

    return (
        <>
            <div className="calculator">
                <div className="input" id="input">{input}</div>
                <div className="buttons">
                    <div className="operators">
                        <div className="operator" onClick={() => makeOperator('+')}>+</div>
                        <div className="operator" onClick={() => makeOperator('-')}>-</div>
                        <div className="operator" onClick={() => makeOperator('*')}>*</div>
                        <div className="operator" onClick={() => makeOperator('/')}>/</div>
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
                            <div id="clear" onClick={clearResult}>C</div>
                        </div>
                    </div>
                    <div className="equal" id="result" onClick={calculate}>=</div>
                </div>
            </div>
        </>
    );
}

export default Calculator;