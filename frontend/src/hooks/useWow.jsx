import { useEffect } from "react";
import { useState } from "react";

export default function useWow() {
  const [currentWow, setCurrentWow] = useState("");

  useEffect(() => {
    fetchAWow();
  }, []);

  const fetchAWow = () => {
    fetch("https://owen-wilson-wow-api.onrender.com/wows/random")
      .then((response) => response.json())
      .then((res) => res[0])
      .then((res) => setCurrentWow(res.audio))
      .catch((err) => console.log(err));
  };

  const sayWow = () => {
    const sound = new Audio(currentWow);
    sound.play();
    fetchAWow();
  };

  return { sayWow, fetchAWow };
}