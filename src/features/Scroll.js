import React from 'react';

class Scroll extends React.Component {
  render() {
    return (
      // {{}} denotes a javascript object, in this case it's css
      <div>
        <hr />
        <div style={{
          overflowY: 'scroll',
          height: '600px',
          margin: '0px 20px'
        }}>
          {/* Automatically has reference to nested child tags */}
          {this.props.children}
        </div>
        <hr />
      </div>
    );
  }
}

export default Scroll;