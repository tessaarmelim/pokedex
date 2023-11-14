function NavBar(props) {
  function selectPokemon(index) {
    props.setPokemonIndex(index);
    console.log(index);
  }

  return (
    <>
      {props.pokemonList.map((pokemon, index) => (
        <li key={pokemon.name}>
          <button onClick={() => selectPokemon(index)}>{pokemon.name}</button>
        </li>
      ))}
    </>
  );
}

export default NavBar;
