import { AddCategory, GifGrid } from "./components";
import { useState } from "react";

export const GifExpertApp = () => {
  const [categoria, setCategoria] = useState([]);
  const onAddCategory = (valor) => {
    if (categoria.includes(valor)) {
      return;
    }

    setCategoria((c) => [valor, ...c]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory newCategory={onAddCategory} />
      {categoria.map((cat) => {
        return <GifGrid key={cat} category={cat} />;
      })}
    </>
  );
};
