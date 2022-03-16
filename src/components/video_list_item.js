import React from "react";

const VideoListItem = (props) => {
    // console.log(props);
    const imageUrl = props.video.snippet.thumbnails.default.url;

    const video_click_handler = () =>{
      props.onVideoSelect(props.video);
    }
    return (
    <li onClick={video_click_handler} className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <img className="media-object" alt="" src={imageUrl} />
      </div>
      <div className="media-body">
        <div className="media-heading">{props.video.snippet.title}</div>
      </div>
    </div>
  </li>);
}

export default VideoListItem;