export const getPokemons = async () => {
	const res = await fetch(
		'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
	).then((res) => res.json());

	const pokemons = await Promise.all(
		res.results.map(async (pokemon: any) => {
			const pokemonResponse = await fetch(pokemon.url).then((res) =>
				res.json()
			);
			return {
				name: pokemon.name,
				img: pokemonResponse.sprites.front_default,
                id: pokemonResponse.id,
                type: pokemonResponse.types[0].type.name
			};
		})
	);

	return pokemons;
};

export const getPokemon = async (name: string | undefined) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
		(res) => res.json()
	);

	return {
		name: name,
		img: res.sprites.front_default,
	};
};
