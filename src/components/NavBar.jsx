function NavBar(props) {
  function selectPokemon(index) {
    props.setPokemonIndex(index);
    console.log(index);
  }

  function selectPikachu(index) {
    props.setPokemonIndex(index);
    console.log(index);
    props.pokemon.name = "pikachu" ? alert("Pika Pikachu!!!") : "";
  }

  return (
    <>
      {props.pokemonList.map((pokemon, index) => (
        <li key={pokemon.name}>
          {pokemon.name == "pikachu" && (
            <button onClick={() => selectPikachu(index)}>{pokemon.name}</button>
          )}
          {pokemon.name != "pikachu" && (
            <button onClick={() => selectPokemon(index)}>{pokemon.name}</button>
          )}
        </li>
      ))}
    </>
  );
}

export default NavBar;
