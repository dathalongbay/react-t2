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

    const handleOperator = (ope) => {
        setOperator(ope);
        setFirstNumber(input);
        setInput('');
    };

    const handleCalculate = () => {
        setSecondNumber(input);

        let result = '';
        console.log('secondNumber' , secondNumber);

        switch (operator) {
            case '+':
                // ép kiểu về số thực cho các biến firstNumber và secondNumber
                // vì rất có thể các biến này đang có kiểu là string
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                // ép kiểu về số thực cho các biến firstNumber và secondNumber
                // vì rất có thể các biến này đang có kiểu là string
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                // ép kiểu về số thực cho các biến firstNumber và secondNumber
                // vì rất có thể các biến này đang có kiểu là string
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                // ép kiểu về số thực cho các biến firstNumber và secondNumber
                // vì rất có thể các biến này đang có kiểu là string
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
        }

        alert(result);
    
        // đưa kết quả vào trong màn hình casio thông qua thuộc tính innerText
        // document.getElementById('input').innerText = result;
        // đưa các biến operator,firstNumber,secondNumber về mặc định rỗng sau khi thực hiện xong 
        // một phép tính
        /* operator = '';
        firstNumber = '';
        secondNumber = ''; */
    }


    // JSX
    return (
        <>
            <div> firstNumber : {firstNumber} ## secondNumber : {secondNumber} ## operator : {operator}</div>
            <div className="calculator">
                <div className="input" id="input">{input}</div>
                <div className="buttons">
                    <div className="operators">
                        <div className="operator" onClick={() => handleOperator('+')}>+</div>
                        <div className="operator" onClick={() => handleOperator('-')}>-</div>
                        <div className="operator" onClick={() => handleOperator('*')}>*</div>
                        <div className="operator" onClick={() => handleOperator('/')}>/</div>
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
                    <div className="equal" id="result" onClick={handleCalculate}>=</div>
                </div>
            </div>
        </>
    );
}

export default Calc;