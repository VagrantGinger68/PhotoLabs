import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { isFavPhotoExist, favorite } = props;
  return (
    <div className='fav-badge'>
      {favorite && <FavIcon selected displayAlert={!!isFavPhotoExist}/>}
      {!favorite && <FavIcon/>}
    </div>
  ) 
};

export default FavBadge;