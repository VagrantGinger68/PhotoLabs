import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const { closePhotoView, viewPhoto, favorite, toggleFavorite } = props;

  const photo = viewPhoto;

  const similarPhotosArr = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closePhotoView} />
      </button>

      <div className="photo-details-modal__top-bar">
        <div className="photo-details-modal__images">
          <PhotoFavButton
            favorite={favorite[photo.id]}
            toggleFavorite={() => {
              toggleFavorite(photo.id);
            }}
          />
          <img
            className="photo-details-modal__image"
            src={photo.urls.full}
            alt="Photo"
          />

          <div className="photo-details-modal__photographer-details">
            <img
              className="photo-details-modal__photographer-profile"
              src={photo.user.profile}
              alt="Photographer Profile"
            />
            <div className="photo-details-modal__photographer-info">
              <span>{photo.user.name}</span>
              <br />
              <span className="photo-details-modal__photographer-location">
                {photo.location.city}, {photo.location.country}
              </span>
            </div>
          </div>
          <hr />
          <div className="photo-details-modal__header">
            <h3>Similar Photos</h3>
            <PhotoList
              photos={similarPhotosArr}
              favorite={favorite}
              toggleFavorite={toggleFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
