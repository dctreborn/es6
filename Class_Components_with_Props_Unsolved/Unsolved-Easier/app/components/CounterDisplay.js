import React from "react";

class CounterDisplay extends React.Component {

  // Write code here to render some JSX that displays "this.props.count"
  render(){
    return (
      <div>
        
        <p>{this.props.count}</p>
      </div>
    )
  }
}

export default CounterDisplay;
