import './styles.css';
import {  Component } from 'react';


export class Home extends Component {

state = {
  counter : 0
}

handleClick = () => {
const {counter} = this.state;

  this.setState(
    (prevState, prevProps) => {
      console.log(prevProps.numberToIncrement)
      return {counter: prevState.counter + 1}},
        () => 
          console.log(this.state.counter));  
}

  render() {
    return  (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
