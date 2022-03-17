import React from 'react';
import { PropTypes } from 'prop-types';

class Display extends React.Component {
  static setDisplay(obj) {
    if (obj.next) return obj.next;
    if (obj.total) return obj.total;
    return 0;
  }

  shouldComponentUpdate(nextState) {
    if (nextState !== this.props) return true;
    return false;
  }

  render() {
    const { changeHandler, inputData } = this.props;
    return (
      <input
        type="text"
        className="calculator--display"
        placeholder="0"
        onChange={changeHandler}
        value={Display.setDisplay(inputData)}
      />
    );
  }
}

Display.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  inputData: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
};

export default Display;
