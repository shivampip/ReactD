import "./App.css";
import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import ImageList from "./ImageList";
import VideoDetail from "./VideoDetail";

// AIzaSyCQneDt3z_zSKwBt_T8bfP01I97nP-oaYY

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  print(msg) {
    console.log(msg);
  }

  onVideoSelect = video => {
    this.print("You selected: " + video.snippet.title);
    this.print(video);
    this.setState({ selectedVideo: video });
  };

  onSearch = async term => {
    this.print("Searching " + term + ".....");
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.print(response.data.items);
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div>
        <SearchBar onSearch={this.onSearch} />
        <div className="content">
          <div>
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div>
            <ImageList
              videos={this.state.videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
