import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const { isFavPhotoExist, favorite } = props;
  return (
    <div className='fav-badge'>
      {/* If a photo is favorited,the heart icon will show a notification */}
      {favorite ? <FavIcon selected displayAlert={!!isFavPhotoExist}/> : <FavIcon/>}
    </div>
  ) 
};

export default FavBadge;