export const getPokemons = async (limit=151, offset=0) => {
	try {
		const res = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
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
					type: pokemonResponse.types[0].type.name,
				};
			})
		);

		return pokemons;
	}
	catch (e) {
		return [
			{
				name: 'Not Found',
				img: 'https://via.placeholder.com/150',
				id: 0,
				type: 'none',
			},
		];
	}
};

export const getPokemon = async (name: string | undefined) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		} else {
			const data = await response.json();
			return {
				name: data.name,
				img: data.sprites.front_default,
				id: data.id,
				type: data.types[0].type.name,
			};
			}
	} catch (e) {
		return {
			name: 'Not Found',
			img: 'https://via.placeholder.com/150',
			id: 0,
			type: 'none',
		};
	}
};
