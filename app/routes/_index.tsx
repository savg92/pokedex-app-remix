// Index.js
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Form, Link, json, useLoaderData, useNavigate } from '@remix-run/react';
import { getPokemons } from '~/models/pokemon.server';

import CardLayout from '~/components/CardLayout/CardLayout';
import { useState } from 'react';
import Pokeball from '../assets/pokeball2.png';
import Favorites from '~/components/Favorites/Favorites';
import { PaginationComponent } from '~/components/PaginationComponent/PaginationComponent';
import { LoaderDataGetPokemons, Pokemon } from '~/types';
import { handlePageChange, handleSubmit } from '~/handlers';
import Search from '~/components/Search/search';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Pokedex' },
		{ name: 'Pokedex app', content: 'Welcome to your Pokedex!' },
		{ description: 'A simple Pokedex app using Remix and Tailwind CSS' },
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

export const loader = async () => {
	const data = await getPokemons(); // limit and offset are optional, default is 151 and 0
	return new Response(JSON.stringify({ data }), {
		headers: {
			'Cache-Control': 'max-age=3600',
			'Content-Type': 'application/json',
		},
	});
};

export default function Index() {
	const { data } = useLoaderData<LoaderDataGetPokemons>();
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();
	const itemsPerPage = 20;
	const totalPages = Math.ceil(data.length / itemsPerPage);

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
				<Search navigate={navigate} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</section>
			<section>
				<Favorites />
			</section>
			<section className='mt-6'>
				<div className='flex flex-wrap justify-center gap-4'>
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
					onPageChange={(page: number) =>
						handlePageChange(page, setCurrentPage)
					}
				/>
				<div className='flex justify-center mt-6 gap-4'>
					<label htmlFor='page'>Select a page:</label>
					<select
						name='page'
						id='page'
						onChange={(e) => setCurrentPage(Number(e.target.value))}
						value={currentPage}
						className='bg-gray-200 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white'
					>
						{Array.from({ length: totalPages }, (_, i) => (
							<option
								key={i + 1}
								value={i + 1}
							>
								{i + 1}
							</option>
						))}
					</select>
				</div>
			</section>
		</>
	);
}
