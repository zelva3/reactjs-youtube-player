import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list.js';

const API_KEY = 'AIzaSyBNSdULigiU7N205Rq-OLIkYSGKj_jfJyg';

function App() {
  const [videos, setVideos] = useState('');
  YTSearch({ key: API_KEY, term: 'car' }, search_callback);

  function search_callback(data) {
    setVideos(data);
  }
  return (
    <div className="App">
      <SearchBar />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
