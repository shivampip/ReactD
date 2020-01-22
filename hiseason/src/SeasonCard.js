import "./SeasonCard.css";
import React from "react";

class SeasonCard extends React.Component {
  state = {
    status: "loading",
    text: null,
    icon: null
  };

  getSeason(lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat < 0 ? "summer" : "winter";
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        let season = this.getSeason(
          position.coords.latitude,
          new Date().getMonth()
        );
        console.log("Season is " + season);
        this.setState({ status: season });
      },
      err => {
        this.setState({ status: "error" });
      }
    );
  }

  renderContent() {
    if (this.state.status === "loading") {
      return <div className="mainText">Loading...</div>;
    } else if (this.state.status === "error") {
      return <div className="mainText">Error</div>;
    } else {
      if (this.state.status === "winder") {
        return <div className="mainText">Buu, It's so cold</div>;
      } else {
        return <div className="mainText">Ohh, It's so hot</div>;
      }
    }
  }

  render() {
    return (
      <div className={`card ${this.state.status}`}>{this.renderContent()}</div>
    );
  }
}

export default SeasonCard;
