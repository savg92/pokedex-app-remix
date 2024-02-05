import { useEffect, useState } from 'react';
import { getPokemon } from '~/models/pokemon.server';
import CardLayout from '../CardLayout/CardLayout';
import { Link } from '@remix-run/react';

const Favorites = () => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		// Ensure this code runs only on the client side
		if (typeof window !== 'undefined') {
			const favoritesFromStorage = JSON.parse(
				localStorage.getItem('favorites') || '[]'
			);

			// Fetch data for each favorite Pokémon
			Promise.all(
				favoritesFromStorage.map((pokemon) =>
					fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
						(response) => response.json()
					)
				)
			).then((data) => setFavorites(data));
		}
	}, []);

	console.log(favorites);

	return (
		<>
			{/* <h1>Your Favorite Pokémon</h1> */}
			{favorites.length > 0 ? (
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'>
					{favorites.map((pokemon, index) => (
                        <Link
							to={pokemon.name}
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