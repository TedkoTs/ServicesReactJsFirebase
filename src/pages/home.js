import React, { useState, useEffect } from 'react';
import './home.css';

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

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            message: 'Random text',
            count: 0
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ message: 'updated' })
        }, 2000)
    }

    increment = () => {
        const { count } = this.state;
        this.setState({ count: count + 1 })
    }

    decrement = () => {
        const { count } = this.state;
        this.setState({ count: count - 1 })
    }

    render() {
        // const { message, count } = this.state;
        return (
            <div className="container">
                <h1>HomePage</h1>
                <p>{this.state.message}</p>
                <button onClick={this.increment}>Increment</button>
                <div className="counter">{this.state.count}</div>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default HomePage;