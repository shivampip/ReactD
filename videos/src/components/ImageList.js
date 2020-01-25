import React from "react";
import VideoItem from "./VideoItem";

class ImageList extends React.Component {
  onVideoSelect = video => {
    this.props.onVideoSelect(video);
  };
  render() {
    let renderedList = this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={this.onVideoSelect}
        />
      );
    });

    return <div style={{ float: "right" }}>{renderedList}</div>;
  }
}

export default ImageList;
