import React, { useState } from "react";
// Importing a SCSS file
import "../scss/search.scss";

export default function Search() {
  const [inputName, setInputName] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputName({
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // test alert
    alert(JSON.stringify(inputName));
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className="searchInputs">
        <input
          value={inputName.characterName || ""}
          onChange={handleChange}
          type="text"
          name="characterName"
          placeholder="Character Name"
          className="searchSection"
        />
        <button type="submit" className="searchIcon searchSection button">
          <img src="../images/search/pickle-rick.png" alt="search Icon" />
        </button>
      </form>
    </section>
  );
}
