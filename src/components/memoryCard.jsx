function MemoryCard({pokemon, handleCardClick}) {
    return (
        <>
            {
                <div key={pokemon.name} className="card flex-col flex-cen" onClick={() => handleCardClick(pokemon.name)}>
                    <img src={pokemon.img} alt={pokemon.name}></img>
                    <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                </div>
            }
        </>
    )
}

export default MemoryCard
