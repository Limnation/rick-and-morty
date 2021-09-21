import CharacterCards from "./CharacterCards.js";
// Importing a SCSS file
import "../scss/card.scss";
// Importing Queries
import { useQuery } from "@apollo/client";
import { QUERY_MORTY } from "../utils/queries";

export default function Cards() {
  const { loading, data } = useQuery(QUERY_MORTY);
  const characters = data?.characters.results || [];
  console.log(characters);
  return (
    <section>
      <div className="searchCard">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <CharacterCards characters={characters} title="The Multiverse" />
        )}
      </div>
    </section>
  );
}
