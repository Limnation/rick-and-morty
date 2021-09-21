// Importing a SCSS file
import "../scss/card.scss";

const CharacterCards = ({ characters, title }) => {
  if (!characters.length) {
    return <h3>No Characters With That Name.</h3>;
  }
  return (
    <div className="characterCards">
      <h3 className="CardTitle">{title}</h3>
      <div className="">
        {characters &&
          characters.map((character) => (
            <div key={character.id} className="cards">
              <div className="characterImage">
                <img src={character.image} alt={character.name} />
              </div>
              <div className="characterText">
                <h4 className="characterName">{character.name}</h4>
                <p className="characterFacts">
                  Status:
                  <span> {character.status}</span>
                  <br />
                  Gender: <span> {character.gender}</span>
                  <br />
                  Species: <span> {character.species}</span>
                  <br />
                  {character.type}
                  <br />
                  {character.created}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CharacterCards;
