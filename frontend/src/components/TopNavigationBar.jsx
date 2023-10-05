import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const {topics, favorite} = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics}/>
      {Object.values(favorite).includes(true) ? <FavBadge favorite={favorite} isFavPhotoExist/> : <FavBadge />}
    </div>
  )
}

export default TopNavigation;