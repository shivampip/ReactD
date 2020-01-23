import "./App.css";
import React from "react";
// import axios from 'axios';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };

  onTermSubmit = async term => {
    console.log("Search: " + term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
