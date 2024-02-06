// Index.js
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Link, json, useLoaderData } from '@remix-run/react';
import { getPokemons } from '~/models/pokemon.server';

import CardLayout from '~/components/CardLayout/CardLayout';
import { useState } from 'react';
import Pokeball from '../assets/pokeball2.png';
import Favorites from '~/components/Favorites/Favorites';
import { PaginationComponent } from '~/components/PaginationComponent/PaginationComponent';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Pokedex' },
		{ name: 'Pokedex app', content: 'Welcome to your Pokedex!' },
	];
};

export const links: LinksFunction = () => {
	return [
		{
			rel: 'icon',
			href: Pokeball,
			type: 'image/png',
		},
	];
};

type LoaderData = {
	data: Awaited<ReturnType<typeof getPokemons>>;
};

type Pokemon = {
	id: number;
	name: string;
	img: string;
	type: string;
};

export const loader = async () => {
	return json<LoaderData>({
		data: await getPokemons(),
	});
};

export default function Index() {
	const { data } = useLoaderData<LoaderData>();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 20;
	const totalPages = Math.ceil(data.length / itemsPerPage);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const currentData = data.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	return (
		<>
			<h1 className='my-6 border-b-2 text-center text-3xl'>
				Welcome to your Pokedex!
			</h1>
			<section>
				<Favorites />
			</section>
			<section className='mt-6'>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'>
					{currentData.map((pokemon: Pokemon, index: number) => (
						<Link
						to={pokemon.name}
						key={pokemon.name + index}
						>
							<CardLayout {...pokemon} />
						</Link>
					))}
				</div>
					<PaginationComponent
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
			</section>
		</>
	);
}
