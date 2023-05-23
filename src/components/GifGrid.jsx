import { GifItem } from "./GifItem";
import { useFetchaGifs } from "../hooks/useFetchaGifs";

export const GifGrid = ({ category }) => {
  const { images, isloading } = useFetchaGifs(category);

  return (
    <>
      <h2>{category} </h2>
      {isloading && <h2>....Cargando</h2>}
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
