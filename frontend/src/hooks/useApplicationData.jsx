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