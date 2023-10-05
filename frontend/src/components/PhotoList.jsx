import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { favorite, toggleFavorite } = props;

  const photos = props.photos.map((photo) => {
    return <PhotoListItem key={photo.id} location={photo.location} urls={photo.urls} user={photo.user} toggleFavorite={() => {toggleFavorite(photo.id)}} favorite={favorite[photo.id]}/>
  });

  return (
    <ul className="photo-list">
      {photos}  
    </ul>
  );
};

export default PhotoList;
