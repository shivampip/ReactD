import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = {
    lat: null,
    lnt: null
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     lat: null,
  //     lnt: null
  //   };
  // }

  componentDidMount() {
    console.log("Component rendered on screen");
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          errMsg: ""
        });
      },
      err => this.setState({ errMsg: err.message })
    );
  }

  componentDidUpdate() {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component is going to unmount");
  }

  renderContent() {
    if (this.state.lat && !this.state.errMsg) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (!this.state.lat && this.state.errMsg) {
      return <div>Error: {this.state.errMsg}</div>;
    }
    return <Spinner text="Please accept location request" />;
  }

  render() {
    console.log("Rendering Component");
    return (
      <div style={{ border: "10px solid green" }}>{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
