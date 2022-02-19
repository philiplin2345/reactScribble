import React, { Component } from "react";
class Counter extends Component {
  state = {
    imageUrl: 'https://picsum.photos/200',
    tags: ["tag1","tag2","tag3"]
  };
  // constructor(){
  //   super();
  //   console.log('Constructor',this);
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }
  styles = {
      fontSize: 50,
      fontWeight: "bold"
  }
  renderTags(){
    if(this.state.tags.length === 0 ) return <p>There are no tags!</p>;
    return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
  }

  doHandleIncrement = () =>{
    this.handleIncrement({id: 1})
  }

  render() {
    console.log('props',this.props)//Each react componenet has a property called props which is a plain js object that includes all attributs
    return (
      <React.Fragment>
        <h4>{this.props.id}</h4>
        {this.props.children}
        <img src = {this.state.imageUrl} alt = ""/>
        <span style={{fontSize: 20}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btm-sm">Increment</button>{/*Passing the reference instead of calling the method. Different from vanila js */}
        <button onClick = {()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        {this.state.tags.length ===0 && 'create a new tag'}
        <div>{this.renderTags()}</div>
      </React.Fragment>
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount(){
      const{value: count} = this.props.counter;
      return count === 0 ? "Zero" : count;
  }
}
//The component that owns a peice of the state should be the one modifying it
export default Counter;
