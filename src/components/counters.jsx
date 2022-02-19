import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    state = { 
        counters: [
            {id:1, value: 0 },
            {id:2, value: 0 },
            {id:3, value: 10 },
            {id:4, value: 0 }
        ]
     } ;
     handleDelete = (counterId) =>{
         console.log("Event Handler to delete called", counterId)
         const counters = this.state.counters.filter(c=>c.id !== counterId);
         this.setState({counters})
     }
     handleReset = () =>{
         const counters = this.state.counters.map(c=>{
             c.value = 0;
             return c;
         })
         this.setState({counters})
     }
     handleIncrement = (counter)=>{
         console.log("The counter is", counter)
         const counters = [...this.state.counters];
         const index = counters.indexOf(counter)
         counters[index] = {...counter};
         counters[index].value++;
         this.setState({counters})
     }
    
    render() { 
        return (
        <div>
            <button onClick ={this.handleReset} className="btn btn-primary btn-sm m-2"> Reset </button>
            {this.state.counters.map(counter => <Counter key = {counter.id} counter = {counter} onIncrement = {this.handleIncrement} onDelete = {this.handleDelete}>
                <h4>Counter #{counter.id}</h4>
            </Counter>)}
        </div>);
        //key cannot be read
    }
}
 
export default Counters;