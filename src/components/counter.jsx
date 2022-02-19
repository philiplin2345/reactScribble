import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
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
  handleIncrement = (product) => {
    console.log(product)
    console.log('Increment Clicked',this)
    this.state.count++;
    this.setState({count:this.state.count+1})//Must use this to notify react of the changes
  }

  doHandleIncrement = () =>{
    this.handleIncrement({id: 1})
  }

  render() {
    return (
      <React.Fragment>
        <img src = {this.state.imageUrl} alt = ""/>
        <span style={{fontSize: 20}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=>this.handleIncrement({hid:7})} className="btn btn-secondary btm-sm">Increment</button>{/*Passing the reference instead of calling the method. Different from vanila js */}
        {this.state.tags.length ===0 && 'create a new tag'}
        <div>{this.renderTags()}</div>
      </React.Fragment>
    );
  }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount(){
      const{count} = this.state;
      return count === 0 ? "Zero" : count;
  }
}

export default Counter;
