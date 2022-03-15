
import './App.css';
import React, { Component } from 'react';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyASF0QHD9UYRQ5sKX1BI0sHU4Cbpm77u_k';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideos:null };

    YTSearch({ key: API_KEY, term: "surfboards" }, (videos) => {
      this.setState({ videos: videos, selectedVideos:videos[0] });
    });
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail video={this.state.selectedVideos}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
