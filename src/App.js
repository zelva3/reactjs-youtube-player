
import _ from 'lodash';
import './App.css';
import React, { Component } from 'react';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail';
import './style/style.css';

const API_KEY = 'AIzaSyASF0QHD9UYRQ5sKX1BI0sHU4Cbpm77u_k';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideos:null };
    this.videoSearch('cars');
    
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ videos: videos, selectedVideos:videos[0] });
    });
  } 
  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);
    return (
      <div className="App row">
        <SearchBar search_term={videoSearch}/>
        <VideoDetail video={this.state.selectedVideos}/>
        <VideoList onVideoSelect={selectedVideos => this.setState({selectedVideos}) } videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
