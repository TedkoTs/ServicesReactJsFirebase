import React, { useState } from "react";

const Counter = props => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    props.onChange("incr", count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
    props.onChange("decr", count - 1);
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={increment}>Increment</button>
      <div className="counter">{count}</div>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// class Counter extends React.Component {
//   state = {
//     count: 0
//   };

//   componentDidUpdate(prevProps, prevState){
//     //   console.log(prevProps);
//     //   console.log(prevState);
//   }

//   increment = () => {
//     const { count } = this.state;
//     const { onChange } = this.props;
//     this.setState({ count: count + 1 });
//     onChange("incr", count + 1);
//   };

//   decrement = () => {
//     const { count } = this.state;
//     const { onChange } = this.props;
//     this.setState({ count: count - 1 });
//     onChange("decr", count - 1);
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <button onClick={this.increment}>Increment</button>
//         <div className="counter">{this.state.count}</div>
//         <button onClick={this.decrement}>Decrement</button>
//       </div>
//     );
//   }
// }

export default Counter;
