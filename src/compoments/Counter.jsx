import React from 'react';
import CounterUI from './CounterUI';
class Counter extends React.Component {
  constructor(){
    super();
    this.state={
      data:0
    }
  }
  handleOperation=(event)=>{
    let data = this.state.data
    if(event===1){
      data++
    } else if(event===2){
      data--
    }
    this.setState({
      data:data
      })
    this.props.counteSum(event);
  }
    render() {
      return (
        <div className="">
        <CounterUI data={this.state.data} handleOperation={(event)=>this.handleOperation(event)}/>
        </div>
      );
    }
  }
  
  export default Counter;