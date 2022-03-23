import operate from '../logic/operate';

describe('operate results are correct', () => {
  test('11 + 2 = 13', () => {
    const obj = {
      numberOne: 11,
      numberTwo: 2,
      operation: '+',
    };

    const result = operate(obj.numberOne, obj.numberTwo, obj.operation);

    expect(result).toBe('13');
  });

  test('11 - 2 = 9', () => {
    const obj = {
      numberOne: 11,
      numberTwo: 2,
      operation: '-',
    };

    const result = operate(obj.numberOne, obj.numberTwo, obj.operation);

    expect(result).toBe('9');
  });

  test('10 ÷ 2 = 5', () => {
    const obj = {
      numberOne: 10,
      numberTwo: 2,
      operation: '÷',
    };

    const result = operate(obj.numberOne, obj.numberTwo, obj.operation);

    expect(result).toBe('5');
  });

  test('10 x 2 = 20', () => {
    const obj = {
      numberOne: 10,
      numberTwo: 2,
      operation: 'x',
    };

    const result = operate(obj.numberOne, obj.numberTwo, obj.operation);

    expect(result).toBe('20');
  });

  test('11 % 2 = 1', () => {
    const obj = {
      numberOne: 11,
      numberTwo: 2,
      operation: '%',
    };

    const result = operate(obj.numberOne, obj.numberTwo, obj.operation);

    expect(result).toBe('1');
  });

  test('10 ÷ 2 = 5', () => {
    const obj = {
      numberOne: 10,
      numberTwo: 2,
      operation: '÷',
    };

    const result = operate(obj.numberOne, obj.numberTwo, obj.operation);

    expect(result).toBe('5');
  });
});
