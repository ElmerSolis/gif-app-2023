import { useState } from "react";

export const AddCategory = ({ newCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const handleClickOnchange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleClickOnSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) {
      return;
    }

    newCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <h2>AddCategory</h2>
      <form onSubmit={handleClickOnSubmit}>
        <input
          type="text"
          placeholder="Agrega una categoria"
          onChange={handleClickOnchange}
          value={inputValue}
        />
      </form>
    </>
  );
};
