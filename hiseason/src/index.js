import React from "react";
import ReactDOM from "react-dom";
import SeasonCard from "./SeasonCard";

class App extends React.Component {
  render() {
    return (
      <div>
        <SeasonCard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
