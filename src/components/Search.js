import React, { useState } from "react";
import Cards from "../components/Cards.js";
// Importing a SCSS file
import "../scss/search.scss";

export default function Search() {
  const [inputName, setInputName] = useState(0);
  const [isShow, setIsShow] = React.useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputName({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // test alert
    if (inputName === 0) {
      alert("Please Enter a Character's Name");
    } else {
      setIsShow(!isShow);
      // JSON.stringify(inputName)
    }
  };

  return (
    <section>
      {isShow ? (
        <Cards inputNameVar={inputName.characterName} />
      ) : (
        <form onSubmit={handleSubmit} className="searchInputs">
          <input
            value={inputName.characterName || ""}
            onChange={handleChange}
            type="text"
            name="characterName"
            placeholder="Character's Name"
            className="searchSection"
          />
          <button type="submit" className="searchIcon searchSection button">
            <img src="../images/search/pickle-rick.png" alt="search Icon" />
          </button>
        </form>
      )}
    </section>
  );
}
