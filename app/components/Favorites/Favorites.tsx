import { useEffect, useState } from 'react';
import { Link } from '@remix-run/react';
import CardLayout from '../CardLayout/CardLayout';

type Pokemon = {
	id: number;
	name: string;
	sprites: {
		front_default: string;
	};
	types: {
		type: {
			name: string;
		};
	}[];
};

const Favorites = () => {
	const [favorites, setFavorites] = useState<Pokemon[]>([]);

	useEffect(() => {
		// Ensure this code runs only on the client side
		if (typeof window !== 'undefined') {
			const favoritesFromStorage = JSON.parse(
				localStorage.getItem('favorites') || '[]'
			);

			Promise.all(
				favoritesFromStorage.map((pokemon: string) =>
					fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
						(response) => response.json()
					)
				)
			).then((data) => setFavorites(data));
		}
	}, []);

	return (
		<>
			{favorites.length > 0 ? (
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'>
					{favorites.map((pokemon, index) => (
						<Link
							relative='route'
							to={`/${pokemon.name}`}
							key={pokemon.name + index}
						>
							<CardLayout
								id={pokemon.id}
								name={pokemon.name}
								img={pokemon.sprites.front_default}
								type={pokemon.types[0].type.name}
							/>
						</Link>
					))}
				</div>
			) : (
				<p>You have no favorite Pokémon yet.</p>
			)}
		</>
	);
};

export default Favorites;
