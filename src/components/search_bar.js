import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import fetchJsonp from 'fetch-jsonp';

class SearchBar extends Component {


 constructor(props){
    super(props);
    this.state = {
      value: '',
      array: []
    }

  }

  ReactYoutubeApi(queryValue) {
    if(!queryValue){
      return;
    }
    const apiKey = 'AI39si7ZLU83bKtKd4MrdzqcjTVI3DK9FvwJR6a4kB_SW_Dbuskit-mEYqskkSsFLxN5DiG1OBzdHzYfW0zXWjxirQKyxJfdkg';
    const query = queryValue;
    const self = this;
    fetchJsonp("http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q="+query+"&key="+apiKey+"&format=5&alt=json&callback=?")
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      const arrayData = json[1].map((item)=>{
                        return({
                          id: item[0],
                          label: item[0]
                        });
                      });
      self.setState({
        array: arrayData
      });
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  searchQuery(data){
    this.setState({value:data});
    this.ReactYoutubeApi(data);
  }

  dropdownSelectedData(searchdata){
    this.setState({value:searchdata});
    this.props.onInputChange(searchdata);
  }

  render(){
    return(
      <div className="search-bar">
      <ReactAutocomplete
        items={this.state.array}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>
          <div
            className="react-autocomplete-dropdown"
            key={item.id}
            style={{ backgroundColor: highlighted ? '#cc0000' : 'transparent', color: highlighted ? 'white' : 'black'}} >
            {item.label}
          </div>
        }
        value={this.state.value}
        onChange={e => this.searchQuery(e.target.value)}
        onSelect={value => this.dropdownSelectedData(value)} />
      </div>
    );
  }

}


export default SearchBar;
