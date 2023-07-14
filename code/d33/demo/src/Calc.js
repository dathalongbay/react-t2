import React, { useState, useEffect, useRef } from 'react';
import './Calculator.css';

function Calculator() {
  const [state, setState] = useState({
    input: '',
    result: '',
    operator: '',
    firstNumber: '',
    secondNumber: ''
  });

  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const clearRef = useRef(null);

  useEffect(function() {
    const { firstNumber, secondNumber, operator } = state;
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

      setState(function(prevState) {
        return {
          ...prevState,
          input: newResult,
          result: newResult
        };
      });
    }
  }, [state.secondNumber]);

  useEffect(function() {
    if (state.result !== '') {
      setState(function(prevState) {
        return {
          ...prevState,
          operator: '',
          firstNumber: '',
          secondNumber: ''
        };
      });
    }
  }, [state.result]);

  function appendNumber(number) {
    const { input } = state;
    let newInput = input + '' + number;
    setState(function(prevState) {
      return {
        ...prevState,
        input: newInput
      };
    });
  }

  function makeOperator(op) {
    const { input } = state;
    setState(function(prevState) {
      return {
        ...prevState,
        operator: op,
        firstNumber: input,
        input: ''
      };
    });
  }

  function calculate() {
    const { input } = state;
    setState(function(prevState) {
      return {
        ...prevState,
        secondNumber: input
      };
    });
  }

  function clearResult() {
    setState({
      input: '',
      result: '',
      operator: '',
      firstNumber: '',
      secondNumber: ''
    });
  }

  return (
    <>
      <div className="calculator">
        <div className="input" ref={inputRef}>{state.input}</div>
        <div className="buttons">
          <div className="operators">
            <div className="operator" onClick={function() { makeOperator('+') }}>+</div>
            <div className="operator" onClick={function() { makeOperator('-') }}>-</div>
            <div className="operator" onClick={function() { makeOperator('*') }}>*</div>
            <div className="operator" onClick={function() { makeOperator('/') }}>/</div>
          </div>
          <div className="leftPanel">
            <div className="numbers">
              <div className="calc-number" onClick={function() { appendNumber(7) }}>7</div>
              <div className="calc-number" onClick={function() { appendNumber(8) }}>8</div>
              <div className="calc-number" onClick={function() { appendNumber(9) }}>9</div>
            </div>
            <div className="numbers">
              <div className="calc-number" onClick={function() { appendNumber(4) }}>4</div>
              <div className="calc-number" onClick={function() { appendNumber(5) }}>5</div>
              <div className="calc-number" onClick={function() { appendNumber(6) }}>6</div>
            </div>
            <div className="numbers">
              <div className="calc-number" onClick={function() { appendNumber(1) }}>1</div>
              <div className="calc-number" onClick={function() { appendNumber(2) }}>2</div>
              <div className="calc-number" onClick={function() { appendNumber(3) }}>3</div>
            </div>
            <div className="numbers">
              <div className="calc-number" onClick={function() { appendNumber(0) }}>0</div>
              <div className="calc-number" onClick={function() { appendNumber('.') }}>.</div>
              <div ref={clearRef} onClick={clearResult}>C</div>
            </div>
          </div>
          <div className="equal" ref={resultRef} onClick={calculate}>=</div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
