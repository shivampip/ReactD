import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  let imgs = props.images.map(img => {
    return <ImageCard key={img.id} image={img} />;
  });
  // let imgs = props.images.map(({ description, id, urls }) => {
  //   return <img key={id} alt={description} src={urls.regular} />;
  // });
  return <div className="image-list">{imgs}</div>;
};

export default ImageList;
