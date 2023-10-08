import { useReducer, useEffect } from "react";
import useWow from "./useWow";

const initialState = {
  favorite: {},
  photoSelected: null,
  photoData: [],
  topicData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PHOTO_DATA":
      return { ...state, photoData: action.payload };
    case "SET_TOPIC_DATA":
      return { ...state, topicData: action.payload };
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        favorite: {
          ...state.favorite,
          [action.payload.photoId]: !state.favorite[action.payload.photoId],
        },
      };
    case "SET_PHOTO_SELECTED":
      return {
        ...state,
        photoSelected: action.payload.photo,
      };
    case "CLOSE_PHOTO_DETAILS_MODAL":
      return {
        ...state,
        photoSelected: null,
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
  const { sayWow } = useWow();

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_PHOTO_DATA", payload: data }))
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_TOPIC_DATA", payload: data }))
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: { photoId } });
  };

  const setPhotoSelected = (photo) => {
    sayWow();
    dispatch({ type: "SET_PHOTO_SELECTED", payload: { photo } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: "CLOSE_PHOTO_DETAILS_MODAL" });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
