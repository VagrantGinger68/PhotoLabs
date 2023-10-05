import React, { useState } from 'react';


import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

  const { photos, topics } = props;

  const [favorite, setFavorite] = useState({});

  const toggleFavorite = (photoId) => {
    setFavorite((prev) => ({
      ...prev,
      [photoId]: !prev[photoId]
    }))
  };

  return (
    <div className="home-route">
      {Object.values(favorite).includes(true)}
      <TopNavigation topics={topics} favorite={favorite}/>
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} favorite={favorite}/>
    </div>
  );
};

export default HomeRoute;
