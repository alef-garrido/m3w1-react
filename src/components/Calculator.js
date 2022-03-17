import React, { useState } from 'react';
import Display from './Display';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const computedResult = calculate(state, e.target.name);
    setState(computedResult);
  };

  const handleChange = (e) => {
    const inputValue = calculate(state, e.target.value);
    setState(inputValue);
  };

  const arr = [
    'AC',
    '+/-',
    '%',
    '÷',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];
  const calcButtons = arr.map((key) => (
    <button type="button" key={key} name={key} onClick={handleClick}>
      {key}
    </button>
  ));

  return (
    <div className="calculator--body">
      <Display inputData={state} changeHandler={handleChange} />
      <div className="calculator--keypad">{calcButtons}</div>
    </div>
  );
}

export default Calculator;
