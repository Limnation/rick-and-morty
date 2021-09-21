import React, { useState } from "react";
import CharacterCards from "./CharacterCards.js";
import Search from "../components/Search";
// Importing a SCSS file
import "../scss/card.scss";
// Importing Queries
import { useQuery } from "@apollo/client";
import { QUERY_MORTY } from "../utils/queries";

export default function Cards() {
  const { loading, data } = useQuery(QUERY_MORTY);
  const characters = data?.characters.results || [];

  const [Show, setShow] = React.useState(true);

  const closeCards = (event) => {
    setShow(!Show);
  };

  return (
    <section>
      {Show ? (
        <div className="searchCard">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div>
              <span onClick={closeCards} className="exitCard">
                &#10007;
              </span>
              <CharacterCards characters={characters} title="The Multiverse" />
            </div>
          )}
        </div>
      ) : (
        <Search />
      )}
    </section>
  );
}
