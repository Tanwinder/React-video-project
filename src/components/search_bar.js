import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
this.state={term:''}
  }
  render(){
    return(
      <div>
      <input onChange={e => this.b(e.target)}/>
      {this.state.term}
      </div>
    );
  }
  b(searchdata){
    console.log(searchdata);
    this.setState({term:searchdata.value});
    this.props.onInputChange(searchdata.value);
  }
}


export default SearchBar;
