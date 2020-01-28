import "./App.css";
import React from "react";
import SongList from "../components/SongList";
import SongDetail from "../components/SongDetail";

const App = () => {
  return (
    <div className="app">
      <SongList/>
      <SongDetail/>
    </div>
  );
};

export default App;
