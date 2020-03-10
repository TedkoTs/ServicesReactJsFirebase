import React, { useState, useEffect } from "react";
import "./home.css";
import Counter from "../components/counter";

// const HomePage = () => {

//     const [message, setMessage] = useState('random');
//     const [count, setCount] = useState(0);
//     const increment = () => {
//         setCount(count + 1);
//         console.log('clicked incr');
//     }
//     const decrement = () => {
//         setCount(count - 1);
//         console.log('clicked decr');
//     }

//     useEffect(() => {
//         setTimeout(() => {
//             console.log('updated');
//             setMessage('updated!')
//         }, 2000)
//     }, [])

//     return (
//         <div className="container">
//             <h1>HomePage</h1>
//             <p>{message}</p>
//             <button onClick={increment}>Increment</button>
//             <div className="counter">{count}</div>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }
//
class HomePage extends React.Component {
  state = {
    message: "Random text"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: "updated" });
    }, 2000);
  }

  displayMessage = (type, count) => {
    if (type === "incr") {
      console.log(`incremented by ${count}`);
      return;
    }
    console.log(`decremented by ${count}`);
  };

  render() {
    return (
      <div className="container">
        <h1>HomePage Component</h1>
        <p>{this.state.message}</p>
        <Counter
          onChange={this.displayMessage}
          title="Counter Component"
        />
      </div>
    );
  }
}

export default HomePage;
