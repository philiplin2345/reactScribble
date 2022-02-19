import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
   
    
    render() {
        console.log('counterZ rendered')
        const {onReset, counters, onDelete, onIncrement}  = this.props;
        return (
        <div>
            <button onClick ={onReset} className="btn btn-primary btn-sm m-2"> Reset </button>
            {counters.map(counter => <Counter key = {counter.id} counter = {counter} onIncrement = {onIncrement} onDelete = {onDelete}>
                <h4>Counter #{counter.id}</h4>
            </Counter>)}
        </div>);
        //key cannot be read
    }
}
 
export default Counters;