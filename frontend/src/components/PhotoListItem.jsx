import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { location, urls, user, toggleFavorite, favorite } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavorite={toggleFavorite} favorite={favorite}/>
      <img className="photo-list__image" src={urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} />
        <p className="photo-list__user-info">{user.name}
        <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </p>
      </div>
    </div>
  )
};

export default PhotoListItem;
