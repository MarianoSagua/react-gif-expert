export const getGifs = async (category) => {
  try {
    const url = `http://api.giphy.com/v1/gifs/search?api_key=3ECB9G1gDRGR4MBmSTqKE04AzMbbx6Km&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    
    return gifs;
  } catch (error) {
    throw new Error("Error en el pedido de datos");
  }
};
