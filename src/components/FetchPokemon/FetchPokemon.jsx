import ApiFetch from '../../api/ApiFetch';

export default function FetchPokemon() {
  return (
    <>
      <ApiFetch url="https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=1025">
        {({ data }) => (
          <div>
            {data
              .filter((pokemon) => pokemon.sprites.front_default)
              .map((pokemon) => (
                <div key={pokemon.id}>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "1em",
                      transition: "transform 0.2s",
                      position: "relative",
                    }}
                    onClick={(e) => {
                      const pkmnInfo = e.currentTarget.querySelector(".pkmn-info");
                      if (e.currentTarget.style.transform === "scale(1.1)") {
                        e.currentTarget.style.transform = "scale(1)";
                        pkmnInfo.style.display = "none";
                      } else {
                        e.currentTarget.style.transform = "scale(1.1)";
                        pkmnInfo.style.display = "block";
                      }
                    }}
                  >
                    <img src={`${pokemon.sprites.front_default}/low.webp`} alt={pokemon.name} />
                    <div
                      className="pkmn-info"
                      style={{
                        display: "none",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        color: "white",
                        padding: "1em",
                        boxSizing: "border-box",
                      }}
                    >
                      <p>ID: {pokemon.id}</p>
                      <p>Name: {pokemon.name}</p>
                      <img src={`${pokemon.sprites.front_default}/low.webp`} alt={pokemon.name} />
                      {/* Add more information as needed */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </ApiFetch>
    </>
  );
}