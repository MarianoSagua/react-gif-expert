import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true);
        const response = await getGifs(category);
        setGifs(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};
