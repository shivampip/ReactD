import React from "react";

class VideoDetail extends React.Component {
  render() {
    let video = this.props.video;

    if (!video) {
      return <div>Loading...</div>;
    }
    return (
      <div className="video-detail">
        <img src={video.snippet.thumbnails.high.url} />
        <br />
        <label className="title">{video.snippet.title}</label>
        <br />
        <p className="description">{video.snippet.description}</p>
      </div>
    );
  }
}

export default VideoDetail;
