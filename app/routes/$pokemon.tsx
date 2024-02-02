import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getPokemon } from '~/models/pokemon.server';

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
		</main>
	);
}
