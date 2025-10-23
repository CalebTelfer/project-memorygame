import { useEffect, useState } from "react"
import MemoryCard from "./memoryCard"
import '../componentCSS/gameBoard.css'

function GameBoard({score, highScore, setScore, setHighScore}) {
    const pokemonNames = ["Ditto", "Pikachu", "Charizard", "Blastoise", "Venusaur", "Gengar", "Zacian", "Lugia", "Victini", "Articuno"];
    const [pokemonList, setList] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);



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



    const handleCardClick = (pokemonName) => {
        if(clickedCards.indexOf(pokemonName) == -1) {
            setClickedCards(prev => [...prev, pokemonName]);
            setScore(prevScore => prevScore + 1); // update score

            if(score + 1 > highScore) { //+1 here to account for weird react state updating times
                setHighScore(score + 1);
            }
        } else {
            setScore(0); // game over

            setClickedCards([]);
        }

        shuffleCards();
      };

      const shuffleCards = () => {
        const newArray = [...pokemonList];

        for (let i = newArray.length -1; i> 0; i--) {
            const j = Math.floor(Math.random() * (i+1)); //random index from 0-i

            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; //swap random index with i
        }

        setList(newArray);
      }

      

    return (
        <>
        <div className="gameboard flex flex-cen gap1">
            {
                pokemonList.map(pokemon => (
                    <MemoryCard pokemon={pokemon} handleCardClick={handleCardClick}/>
                ))
            }
        </div>
        </>
    )
}

export default GameBoard