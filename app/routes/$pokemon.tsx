import { json, LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import { useEffect } from 'react';
import { getPokemon } from '~/models/pokemon.server';

export const meta: MetaFunction = () => {
	const { pokemon } = useParams() as { pokemon: string };
	return [
		{ title: `Pokedex - ${pokemon[0].toUpperCase() + pokemon.slice(1)}` },
	];
};

type LoaderData = {
	pokemon: Awaited<ReturnType<typeof getPokemon>>;
};

export const loader: LoaderFunction = async ({ params }) => {
	return json({
		pokemon: await getPokemon(params.pokemon as string),
	});
};

export default function PostSlug() {
	const { pokemon } = useLoaderData() as LoaderData;
	
	const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
	let isFavorite = false;

	useEffect(() => {
		//check if the pokemon is in the favorites
		isFavorite = favorites.includes(pokemon.name);
	}, [favorites]);

	// add/remove pokemon to the favorites
	const handleAddRemoveToFavorites = (pokemon: string) => {
		const pokemonIndex = favorites.findIndex((p: string) => p === pokemon);
		if (pokemonIndex === -1) {
			favorites.push(pokemon);
		} else {
			favorites.splice(pokemonIndex, 1);
		}
		localStorage.setItem('favorites', JSON.stringify(favorites));
	};

	return (
		<main className='mx-auto max-w-4xl'>
			<h1 className='my-6 border-b-2 text-center text-3xl'>
				You caught: {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
			</h1>
			<img
				className='mx-auto'
				src={pokemon.img}
			/>
			<p>Type: {pokemon.type}</p>
			<p>Id: {pokemon.id}</p>
			<button
				className='bg-red-500 text-white px-4 py-2 rounded-md'
				onClick={() => handleAddRemoveToFavorites(pokemon.name)}
			>
				{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
			</button>
		</main>
	);
}
