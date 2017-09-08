import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import $ from "jquery";

class SearchBar extends Component {
//   constructor(props){
//     super(props);
//     this.state={term:''}
//   }
//   render(){
//     return(
//       <div>
//       <input onChange={e => this.b(e.target)}/>
//       {this.state.term}
//       </div>
//     );
//   }
//   b(searchdata){
//     console.log(searchdata);
//     this.setState({term:searchdata.value});
//     this.props.onInputChange(searchdata.value);
//   }
// }


  constructor(props){
    super(props);
    this.state = {
      value: '',
      array: []
    }

  }
  jkl(data) {
    this.setState({array:data});
  }
  ReactYoutubeApi(ad) {
    if(!ad){
      return;
    }
    const apiKey = 'AI39si7ZLU83bKtKd4MrdzqcjTVI3DK9FvwJR6a4kB_SW_Dbuskit-mEYqskkSsFLxN5DiG1OBzdHzYfW0zXWjxirQKyxJfdkg';
    const query = ad;
    const self = this;
    $.ajax({
            url: "https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&q="+query+"&key="+apiKey+"&format=5&alt=json&callback=?",
            dataType: 'jsonp',
            success: function(data, textStatus, request) {
              const arrayData = data[1].map((item)=>{
                return({
                  id: item[0],
                  label: item[0]
                });
              })
              self.jkl(arrayData);
            }
        });
  }
  render(){
    return(
      <div>
      <ReactAutocomplete
        items={this.state.array}
        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
            >
            {item.label}
          </div>
        }
        value={this.state.value}
        onChange={e => this.b(e.target.value)}
        onSelect={value => this.c(value)}
      />
      </div>
    );
  }
  b(searchdata){
    this.setState({value:searchdata});
    this.ReactYoutubeApi(searchdata);
  }
  c(searchdata){
    this.setState({value:searchdata});
    this.props.onInputChange(searchdata);
  }
}

// constructor (props) {
//    super(props)
//    this.state = {
//      value: '',
//    }
//  }
//
//  render() {
//    return (
//      <ReactAutocomplete
//        items={[
//          { id: 'foo', label: 'foo' },
//          { id: 'bar', label: 'bar' },
//          { id: 'baz', label: 'baz' },
//        ]}
//        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
//        getItemValue={item => item.label}
//        renderItem={(item, highlighted) =>
//          <div
//            key={item.id}
//            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
//          >
//            {item.label}
//          </div>
//        }
//        value={this.state.value}
//        onChange={e => this.setState({ value: e.target.value })}
//        onSelect={value => this.setState({ value })}
//      />
//    )
//  }
// }

export default SearchBar;
