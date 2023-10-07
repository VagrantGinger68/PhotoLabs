import React, { useState } from "react";

import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {

  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        favorite={state.favorite}
        toggleFavorite={updateToFavPhotoIds}
        photos={photos}
        topics={topics}
        openPhotoView={setPhotoSelected}
      />
      {state.photoSelected && (
        <PhotoDetailsModal
          closePhotoView={onClosePhotoDetailsModal}
          viewPhoto={state.photoSelected}
          favorite={state.favorite}
          toggleFavorite={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;