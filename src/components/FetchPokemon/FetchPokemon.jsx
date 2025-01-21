import { useState } from "react";
import ApiFetch from "../../api/ApiFetch";
import { Comments } from "../Comments/Comments";
import "./FetchPokemon.scss";

export default function FetchPokemon() {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const handlePokemonClick = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setSelectedPokemon(data);
        } catch (error) {
            console.error("Erreur lors de la récupération des détails du Pokémon :", error);
        }
    };

    return (
        <div className="pokemon-page">
            <ApiFetch url="https://pokeapi.co/api/v2/pokemon-form/?offset=0&limit=1025">
                {(data) => (
                    <div className="pokemon-container">
                        {data.results.map((pokemon, index) => (
                            <div key={index} className="pokemon-card">
                                <div onClick={() => handlePokemonClick(pokemon.url)}>
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                                        alt={pokemon.name}
                                    />
                                    <p>{pokemon.name}</p>
                                </div>
                                <Comments />
                            </div>
                        ))}
                    </div>
                )}
            </ApiFetch>

            {selectedPokemon && (
                <div className="pokemon-details">
                    <h2>{selectedPokemon.name}</h2>
                    <img
                        src={selectedPokemon.sprites.front_default}
                        alt={selectedPokemon.name}
                    />
                    <p><strong>ID:</strong> {selectedPokemon.id}</p>
                    <p><strong>Type(s):</strong> {selectedPokemon.types.map(type => type.type.name).join(", ")}</p>
                    <p><strong>Poids:</strong> {selectedPokemon.weight} kg</p>
                    <p><strong>Taille:</strong> {selectedPokemon.height} m</p>
                    <button onClick={() => setSelectedPokemon(null)}>Fermer</button>
                </div>
            )}
        </div>
    );
}
