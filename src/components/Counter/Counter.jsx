import React from 'react';
import './Counter.css';

class Counter extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            counter: 0
        }

        this.decrement = this.decrement.bind(this)
        this.increment = this.increment.bind(this)
    }

    decrement() {
        let minus = this.state.counter - 1;

        this.setState({
            counter: minus
        });
    }

    increment() {
        let plus = this.state.counter + 1;

        this.setState({
            counter: plus
        })
    }

    render(){
        return(
            <div className="counter">
                <h2 className='counter__count'>
                    {this.state.counter}
                </h2>
                <button className='counter__btn-less' 
                        onClick={this.decrement}>-</button>
                <button className='counter__btn-plus' 
                        onClick={this.increment}>+</button>
            </div>
        )
    }
}


export default Counter;