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
					id: pokemonResponse.id,
					name: pokemonResponse.name,
					// img: pokemonResponse.sprites.front_default,
					// img: pokemonResponse.sprites.versions['generation-v']['black-white'].animated.front_default,
					img: pokemonResponse.sprites.other['official-artwork'].front_default,
					// img: pokemonResponse.sprites.other['dream_world'].front_default,
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

export const getPokemon = async (name: string | number | undefined) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		} else {
			const data = await response.json();
			return {
				name: data.name,
				img: data.sprites,
				id: data.id,
				type: data.types[0].type.name,
				avilities: data.abilities,
				height: data.height,
				weight: data.weight,
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
