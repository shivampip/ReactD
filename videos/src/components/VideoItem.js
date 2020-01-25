import "./VideoItem.css";
import React from "react";

class VideoItem extends React.Component {
  onVideoSelect = eve => {
    this.props.onVideoSelect(this.props.video);
  };

  render() {
    let video = this.props.video.snippet;
    return (
      <div className="video-item" onClick={this.onVideoSelect}>
        <img alt={video.title} src={video.thumbnails.medium.url} />
        <label>{video.title}</label>
      </div>
    );
  }
}

export default VideoItem;
