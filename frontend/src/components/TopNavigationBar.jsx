import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const {topics, favorite, setTopicSelected} = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo"><a href='/'>PhotoLabs</a></span>
      <TopicList topics={topics} setTopicSelected={setTopicSelected}/>
      {Object.values(favorite).includes(true) ? <FavBadge favorite={favorite} isFavPhotoExist/> : <FavBadge />}
    </div>
  )
}

export default TopNavigation;