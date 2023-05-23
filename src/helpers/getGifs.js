
export const getGifs = async (category) => {
    const api = `https://api.giphy.com/v1/gifs/search?api_key=YHFd5YDDWpTQSNqYWyzHNP16eZQYCdQC&q=${category}&limit=10`;
    const resp = await fetch(api);
    const { data } = await resp.json();

    // console.log(data);

    const respuesta = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

//    console.log(respuesta);
    return respuesta;
  };