import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {

  const [viewPhoto, setViewPhoto] = useState();

  const openPhotoView = (photo) => {
    setViewPhoto({photo})
  };

  const closePhotoView = () => {
    setViewPhoto()
  }

  const [favorite, setFavorite] = useState({});

  const toggleFavorite = (photoId) => {
    setFavorite((prev) => (
      {
      ...prev,
      [photoId]: !prev[photoId]
    }))
  };

  return (
    <div className="App">
      <HomeRoute favorite={favorite} toggleFavorite={toggleFavorite} photos={photos} topics={topics} openPhotoView={openPhotoView}/>
      {viewPhoto && <PhotoDetailsModal closePhotoView={closePhotoView} viewPhoto={viewPhoto} favorite={favorite} toggleFavorite={toggleFavorite} />}
    </div>
  );
};

export default App;