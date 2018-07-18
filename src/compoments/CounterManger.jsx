import React from 'react';
import Counter from './Counter';
class CounterManger extends React.Component {
  constructor(){
    super();
    this.state={
     num:5,
     sum:0
    }
  }
  counteSum=(event)=>{
    let sum = this.state.sum
    if(event==1){
      sum++
    } else if(event==2){
      sum--
    }
    this.setState({
      sum:sum
    })
  }
    render() {
      let counters = []
      for(let i=0;i<this.state.num;i++){
        counters.push(<Counter counteSum ={(event)=>this.counteSum(event)}/>) 
      }
      return (
        <div className="">
          {counters}
          <p>总计：{this.state.sum}</p>
        </div>
      );
    }
  }
  
  export default CounterManger;