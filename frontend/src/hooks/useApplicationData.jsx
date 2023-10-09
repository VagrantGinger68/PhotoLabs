import { useReducer, useEffect } from "react";
import useWow from "./useWow";

const initialState = {
  favorite: {},
  photoSelected: null,
  topicSelected: [],
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
    case "SET_TOPIC_SELECTED":
    return {
        ...state,
        topicSelected: action.payload.topic.id,
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

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Promise.all([
      fetch("/api/photos").then((response) => response.json()),
      fetch("/api/topics").then((response) => response.json())
    ])
    .then(([photoData, topicData]) => {
      dispatch({ type: "SET_PHOTO_DATA", payload: photoData });
      dispatch({ type: "SET_TOPIC_DATA", payload: topicData });
    })
  }, []);
  
  useEffect(() => {
    if (state.topicSelected) {
      fetch(`/api/topics/photos/${state.topicSelected}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: "SET_PHOTO_DATA", payload: data }));
    }
  }, [state.topicSelected]);

  const updateToFavPhotoIds = (photoId) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: { photoId } });
  };

  const setPhotoSelected = (photo) => {
    sayWow();
    dispatch({ type: "SET_PHOTO_SELECTED", payload: { photo } });
  };

  const setTopicSelected = (topic) => {
    document.title = `${topic.title}`
    
    const topicElements = document.querySelectorAll(".top-nav-bar__topic-list span");
    topicElements.forEach((element) => {
      element.style.textDecoration = "none";
    });
  
    const selectedTopicElement = document.querySelector(`#root > div > div > div > div.top-nav-bar__topic-list > div:nth-child(${topic.id}) > span`);
    if (selectedTopicElement) {
      selectedTopicElement.style.textDecoration = "overline";
    }

    dispatch({ type: "SET_TOPIC_SELECTED", payload: { topic } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: "CLOSE_PHOTO_DETAILS_MODAL" });
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    setTopicSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
