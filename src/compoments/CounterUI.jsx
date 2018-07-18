import React from 'react';

class CounterUI extends React.Component {
    render() {

      return (
        <div className="">
         <button onClick={()=>{this.props.handleOperation(2)}}>--</button>
         <button onClick={()=>{this.props.handleOperation(1)}}>+</button>
        counter:{this.props.data}
        </div>
      );
    }
  }
  
  export default CounterUI;