import React from "react";

class VideoDetail extends React.Component {
  getVideoSrc = () => {
    return `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
  };

  render() {
    let video = this.props.video;

    if (!video) {
      return <div>Loading...</div>;
    }
    return (
      <div className="video-detail">
        <iframe
          title="Youtube Video Player"
          src={this.getVideoSrc()}
          width="700"
          height="420"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <h3 className="title">{video.snippet.title}</h3>
        <p className="description">{video.snippet.description}</p>
      </div>
    );
  }
}

export default VideoDetail;
