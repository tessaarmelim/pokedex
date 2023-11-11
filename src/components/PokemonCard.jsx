const Pokemoncard = (props) => {
  const { name, imgSrc } = props.pokemon;
  return (
    <figure>
      {imgSrc ? <img src={imgSrc} /> : <p>???</p>}

      <figcaption>{name}</figcaption>
    </figure>
  );
};
export default Pokemoncard;

/*function PokemonCard(props) {
  console.log(props);

  return (
    <div>
      <img src={props.pokemon.imgSrc} />
      <h1>{props.pokemon.name}</h1>
    </div>
  );
}

export default PokemonCard;*/
