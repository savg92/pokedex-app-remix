import { LoaderFunction, MetaFunction } from '@remix-run/node';
import { Link, useLoaderData, useParams } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { handleAddRemoveToFavorites } from '~/handlers';
import { getPokemon } from '~/models/pokemon.server';
import { LoaderDataGetPokemon } from '~/types';

export const meta: MetaFunction = () => {
	const { pokemon } = useParams() as { pokemon: string };
	let title = pokemon[0].toUpperCase() + pokemon.slice(1);

	return [{ title: `Pokedex - ${title}` }];
};

export const loader: LoaderFunction = async ({ params }) => {
	const pokemon = await getPokemon(params.pokemon);
	return new Response(JSON.stringify({ pokemon }), {
		headers: {
			'Cache-Control': 'max-age=3600',
			'Content-Type': 'application/json',
		},
	});
};

export default function PostSlug() {
	const { pokemon } = useLoaderData() as LoaderDataGetPokemon;

	const [favorites, setFavorites] = useState<string[]>([]);
	let [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const favoritesFromStorage = JSON.parse(
			localStorage.getItem('favorites') || '[]'
		);
		setFavorites(favoritesFromStorage);
		setIsFavorite(favoritesFromStorage.includes(pokemon.name));
	}, []);

	return (
		<>
			<h1 className='my-6 border-b-2 text-center text-3xl'>
				You caught: &nbsp;
				<span className={pokemon.name === 'Not Found' ? 'text-red-500' : ''}>
					{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
				</span>
			</h1>

			<section className='flex flex-col md:flex-row gap-4 justify-center items-center'>
				<img
					className='mx-auto h-1/5 w-full'
					src={
						pokemon &&
						pokemon.img &&
						pokemon.img.other &&
						pokemon.img.other['official-artwork'] &&
						pokemon.img.other['official-artwork'].front_default
					}
					alt={pokemon.name}
				/>
				<div
					className={`w-full flex flex-col gap-4 p-8 rounded-xl ${
						pokemon.type === 'fire'
							? 'bg-red-500 dark:bg-red-700'
							: pokemon.type === 'water'
							? 'bg-blue-500 dark:bg-blue-700'
							: pokemon.type === 'grass'
							? 'bg-green-500 dark:bg-green-700'
							: pokemon.type === 'electric'
							? 'bg-yellow-500 dark:bg-yellow-700'
							: pokemon.type === 'ice'
							? 'bg-blue-300 dark:bg-blue-500'
							: pokemon.type === 'fighting'
							? 'bg-red-700 dark:bg-red-900'
							: pokemon.type === 'poison'
							? 'bg-purple-500 dark:bg-purple-700'
							: pokemon.type === 'ground'
							? 'bg-yellow-800 dark:bg-yellow-900'
							: pokemon.type === 'flying'
							? 'bg-blue-200 dark:bg-blue-400'
							: pokemon.type === 'psychic'
							? 'bg-purple-400 dark:bg-purple-600'
							: pokemon.type === 'bug'
							? 'bg-green-400 dark:bg-green-600'
							: pokemon.type === 'rock'
							? 'bg-gray-500 dark:bg-gray-700'
							: pokemon.type === 'ghost'
							? 'bg-purple-800 dark:bg-purple-900'
							: pokemon.type === 'dark'
							? 'bg-gray-800 dark:bg-gray-900'
							: pokemon.type === 'dragon'
							? 'bg-red-800 dark:bg-red-900'
							: pokemon.type === 'steel'
							? 'bg-gray-300 dark:bg-gray-500'
							: pokemon.type === 'fairy'
							? 'bg-pink-300 dark:bg-pink-500'
							: pokemon.type === 'normal'
							? 'bg-gray-400 dark:bg-gray-600'
							: pokemon.type === 'unknown'
							? 'bg-gray-600 dark:bg-gray-800'
							: pokemon.type === 'shadow'
							? 'bg-black dark:bg-gray-900'
							: 'bg-gray-500 dark:bg-gray-700'
					}`}
				>
					<div>
						<p>Type:</p>
						<p
							className={`rounded-full w-16 flex justify-center items-center ml-2 ${
								pokemon.type === 'fire'
									? 'bg-red-500'
									: pokemon.type === 'water'
									? 'bg-blue-500'
									: pokemon.type === 'grass'
									? 'bg-green-500'
									: pokemon.type === 'electric'
									? 'bg-yellow-500'
									: pokemon.type === 'ice'
									? 'bg-blue-300'
									: pokemon.type === 'fighting'
									? 'bg-red-700'
									: pokemon.type === 'poison'
									? 'bg-purple-500'
									: pokemon.type === 'ground'
									? 'bg-yellow-800'
									: pokemon.type === 'flying'
									? 'bg-blue-200'
									: pokemon.type === 'psychic'
									? 'bg-purple-400'
									: pokemon.type === 'bug'
									? 'bg-green-400'
									: pokemon.type === 'rock'
									? 'bg-gray-500'
									: pokemon.type === 'ghost'
									? 'bg-purple-800'
									: pokemon.type === 'dark'
									? 'bg-gray-800'
									: pokemon.type === 'dragon'
									? 'bg-red-800'
									: pokemon.type === 'steel'
									? 'bg-gray-300'
									: pokemon.type === 'fairy'
									? 'bg-pink-300'
									: pokemon.type === 'normal'
									? 'bg-gray-400'
									: pokemon.type === 'unknown'
									? 'bg-gray-600'
									: pokemon.type === 'shadow'
									? 'bg-black'
									: 'bg-gray-500'
							}`}
						>
							{pokemon.type[0].toUpperCase() + pokemon.type.slice(1)}
						</p>
					</div>
					<p>Id: {pokemon.id}</p>
					<p>Height: {pokemon.height}</p>
					<p>Weight: {pokemon.weight}</p>
					<div className='flex flex-col gap-2'>
						<p>Abilities:</p>
						<ul className='flex flex-col gap-2 ml-4'>
							{pokemon &&
								pokemon.avilities &&
								pokemon.avilities.map(
									(ability: { ability: { name: string } }, index: number) => (
										<li key={index}>
											{ability.ability.name[0].toUpperCase() +
												ability.ability.name.slice(1)}
										</li>
									)
								)}
						</ul>
					</div>
					<button
						className='bg-red-700 text-white px-4 py-2 rounded-md'
						onClick={() => handleAddRemoveToFavorites(favorites, pokemon.name, setFavorites, setIsFavorite)}
					>
						{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
					</button>
				</div>
			</section>
			<Link to='/'>
				<p>﹤ Back to the Pokedex</p>
			</Link>
		</>
	);
}
