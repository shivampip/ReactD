import "./ImageCard.css";
import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { span: 0 };
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    //console.log(this.imgRef);
    this.imgRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    let height = this.imgRef.current.clientHeight;
    let numSpan = Math.ceil(height / 10 + 1);
    console.log("Span: " + numSpan);
    this.setState({ span: numSpan });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div
        className="image-card"
        style={{ gridRowEnd: `span ${this.state.span}` }}
      >
        <img ref={this.imgRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
