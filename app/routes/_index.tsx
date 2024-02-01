import type { MetaFunction } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';
import { getPokemons } from '~/models/pokemon.server';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Pokedex' },
		{ name: 'Pokedex app', content: 'Welcome to your Pokedex!' },
	];
};


type LoaderData = {
	data: Awaited<ReturnType<typeof getPokemons>>;
};

export const loader = async () => {
	return json<LoaderData>({
		data: await getPokemons(),
	});
};

export default function Index() {
	const { data } = useLoaderData<LoaderData>();

	console.log(data);

	return (
		<>
			<h1>Welcome to your Pokedex!</h1>

			<section>
				{data.map((pokemon) => (
					<div key={pokemon.name}>{pokemon.name}</div>
				))}
			</section>
		</>
	);
}
