import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetails from './components/video_details';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDR7PZ35d74BpYyeu1hMDTB7XKNnngMozI';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      videos:[],
    onselect: null
  };
  this.a('ranjit')
  }



  a(term) {
    YTSearch({key: API_KEY, term:term}, (data) => {
      this.setState({
        videos:data,
      onselect:data[0]
    });
    })
  }
  render(){
    const jkl = _.debounce((term)=> {this.a(term)},400);
    return(
      <div>
      <SearchBar onInputChange={jkl}/>
      <VideoDetails video={this.state.onselect}/>
      <VideoList
      videos={this.state.videos}
      onselected={(term)=> {this.setState({onselect:term})}}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.app-container'));
