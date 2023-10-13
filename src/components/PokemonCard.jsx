function PokemonCard(props) {
   console.log(props)

  return <div>
    
    <img src={props.pokemon.imgSrc}/>
     <h1>{props.pokemon.name}</h1>
  </div>;
}

export default PokemonCard;


/*const pokemonList = [
  {
        name: "bulbasaur",
        imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
*/



/*function PokemonCard() {
  return (
    <figure>
      <img src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
      <figcaption>Bulbasaur</figcaption>
    </figure>
  );
  export default PokemonCard;
}*/
