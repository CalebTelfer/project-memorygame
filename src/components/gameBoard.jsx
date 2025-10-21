import { useEffect, useState } from "react"
import MemoryCard from "./memoryCard"
import '../componentCSS/gameBoard.css'

function GameBoard({setScore}) {
    const pokemonNames = ["Ditto", "Pikachu", "Charizard", "Blastoise", "Venasaur", "Gengar", "Zacian", "Lugia", "Victini", "Articuno"];
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
        <div className="gameboard">

        </div>
        </>
    )
}

export default GameBoard