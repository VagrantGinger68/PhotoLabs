import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { toggleFavorite, favorite} = props;

  return (
    <div className="photo-list__fav-icon">
      <div onClick={toggleFavorite} className="photo-list__fav-icon-svg">
        {favorite && <FavIcon selected/>}
        {!favorite && <FavIcon/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;