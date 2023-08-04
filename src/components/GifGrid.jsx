import React from "react";
import { ItemGif } from "./ItemGif";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {isLoading ? (
          <p className="loading">Cargando...</p>
        ) : (
          <>
            {gifs.map((gif) => (
              <ItemGif key={gif.id} {...gif} />
            ))}
          </>
        )}
      </div>
    </>
  );
};
