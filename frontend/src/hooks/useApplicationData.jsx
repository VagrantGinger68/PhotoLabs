import { useState } from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({
    favorite: {},
    photoSelected: null,
  });

  const updateToFavPhotoIds = (photoId) => {
    setState((prevState) => ({
      ...prevState,
      favorite: {
        ...prevState.favorite,
        [photoId]: !prevState.favorite[photoId],
      },
    }));
  };

  const setPhotoSelected = (photo) => {
    setState((prevState) => ({
      ...prevState,
      photoSelected: photo,
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prevState) => ({
      ...prevState,
      photoSelected:null,
    }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
