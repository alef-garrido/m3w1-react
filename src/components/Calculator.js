import React from 'react';
import Display from './Display';
import calculate from '../logic/calculate';

/* eslint-disable-next-line react/prefer-stateless-function  */
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this); // keypad click event
    this.handleChange = this.handleChange.bind(this); // display change of value
  }

  handleClick(e) {
    const computedResult = calculate(this.state, e.target.name);
    this.setState(computedResult);
  }

  handleChange(e) {
    const inputValue = calculate(this.state, e.target.value);
    this.setState(inputValue);
  }

  render() {
    const arr = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
    const calcButtons = arr.map((key) => (
      <button
        type="button"
        key={key}
        name={key}
        onClick={this.handleClick}
      >
        {key}
      </button>
    ));

    return (
      <div className="calculator--body">
        <Display
          inputData={this.state}
          changeHandler={this.handleChange}
        />
        <div className="calculator--keypad">
          {calcButtons}
        </div>
      </div>
    );
  }
}

export default Calculator;
