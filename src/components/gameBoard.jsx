import { useEffect, useState } from "react"
import MemoryCard from "./memoryCard"
import '../componentCSS/gameBoard.css'

function GameBoard({setScore}) {
    const pokemonNames = ["Ditto", "Pikachu", "Charizard", "Blastoise", "Venusaur", "Gengar", "Zacian", "Lugia", "Victini", "Articuno"];
    const [pokemonList, setList] = useState([]);



    useEffect(() => {

        async function fetchPokemonData() {
            const promises = pokemonNames.map(async (pokemon) => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                return response.json();
            });

            try {
                const results = await Promise.all(promises);

                const formattedResults = results.map(result => ({
                    name: result.name,
                    img: result.sprites.other["official-artwork"].front_default
                }));
                
                setList(formattedResults);
            } catch (error) {
                console.log("One or more failed");
            }
        }

        fetchPokemonData();
    }, [])



    const handleCardClick = () => {
        setScore(prevScore => prevScore + 1); // update score
      };

    return (
        <>
        <div className="gameboard flex flex-cen gap1">
            {
                pokemonList.map(pokemon => (
                    <div key={pokemon.name} className="card flex-col flex-cen" onClick={handleCardClick}>
                        <img src={pokemon.img} alt={pokemon.name}></img>
                        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default GameBoard