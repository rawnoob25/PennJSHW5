import React, { Component } from 'react';

class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {listName:''};
  }

  handleSubmit(e) {
      //console.log('in AddList.handleSubmit');
      if(this.refs.id.value === '') {
        alert('List ID is required');
      } else {
        this.setState({listName:this.refs.id.value}, 
        function(){
          this.props.addList(this.state.listName);
        });
      }

      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

      // Implement the rest of this function here!
  }

  render() {
    return (
      <div id="addListDiv">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div id='addList'>
          <label>What will be on your next list?&nbsp;
          <input type='text' ref='id' id='newID'></input>
          </label>
        </div>
        <br />
        <input type='submit' value='Create List' />
      </form>
      </div>
    );
  }
}

export default AddList;
