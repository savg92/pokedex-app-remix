import type { MetaFunction } from '@remix-run/node';
import { Link, json, useLoaderData } from '@remix-run/react';
import { getPokemon, getPokemons } from '~/models/pokemon.server';

import Pagination from '~/components/PaginationComponent/PaginationComponent';
import CardLayout from '~/components/CardLayout/CardLayout';
import { useState } from 'react';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Pokedex' },
		{ name: 'Pokedex app', content: 'Welcome to your Pokedex!' },
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

	// Calculate the items for the current page
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	return (
		<>
			<h1 className='my-6 border-b-2 text-center text-3xl'>
				Welcome to your Pokedex!
			</h1>

			<section>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'>
					{currentItems.map((pokemon: Pokemon, index: number) => (
						<Link
							to={pokemon.name}
							key={pokemon.name + index}
						>
							<CardLayout {...pokemon} />
						</Link>
					))}
				</div>
				{/* <Pagination
					dataLength={data.length}
					itemsPerPage={itemsPerPage}
					page={handlePageChange}
				/> */}
			</section>
		</>
	);
}
