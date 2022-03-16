import React from 'react';
/* eslint-disable-next-line react/prefer-stateless-function  */
class Display extends React.Component {
  render() {
    return (
      <input
        type="text"
        className="calculator--display"
        placeholder="0"
      />
    );
  }
}

export default Display;
