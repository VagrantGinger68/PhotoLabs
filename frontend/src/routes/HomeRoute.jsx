import React, { useState } from 'react';


import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {

  const { photos, topics, openPhotoView, favorite, toggleFavorite } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorite={favorite}/>
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} favorite={favorite} openPhotoView={openPhotoView}/>
    </div>
  );
};

export default HomeRoute;
