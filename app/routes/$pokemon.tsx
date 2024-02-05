import { json, LoaderFunction, MetaFunction } from '@remix-run/node';
import { useLoaderData, useParams } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { getPokemon } from '~/models/pokemon.server';

export const meta: MetaFunction = () => {
	const { pokemon } = useParams() as { pokemon: string };
	let title = pokemon[0].toUpperCase() + pokemon.slice(1);
	return [{ title: `Pokedex - ${title}` }];
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

	const [favorites, setFavorites] = useState<string[]>([]);
	let [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const favoritesFromStorage = JSON.parse(
			localStorage.getItem('favorites') || '[]'
		);
		setFavorites(favoritesFromStorage);
		setIsFavorite(favoritesFromStorage.includes(pokemon.name));
	}, []);

	const handleAddRemoveToFavorites = (pokemon: string) => {
		const updatedFavorites = favorites.includes(pokemon)
			? favorites.filter((fav) => fav !== pokemon)
			: [...favorites, pokemon];
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
		setFavorites(updatedFavorites);
		setIsFavorite(updatedFavorites.includes(pokemon));
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
			<p>Type: {pokemon.type[0].toUpperCase() + pokemon.type.slice(1)}</p>
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