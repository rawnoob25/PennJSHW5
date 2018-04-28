import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
	super(props);
	this.state = { color: 'black' };
    }

    handleClick() {
  // Implement this function!
     let col = this.state.color;
     if(col === 'black'){
       col = 'gray';
     } else {
       col = 'black';
     }
     this.setState({color:col});
    }

  render() {
    var item = this.props.item;
    var name = item.name;

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

