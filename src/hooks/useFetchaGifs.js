import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchaGifs = (category) => {
    const [isloading, setisloading] = useState(true)
    const [images, setImages] = useState([]);
    const llamadaApi = async () => {
      const info = await getGifs(category);
      setImages(info);
    //   console.log(isloading)
      setisloading(false)
    };
  
    useEffect(() => {
      llamadaApi();
    }, []);
  

    

  return{
      images: images,
     isloading,
  }
}
