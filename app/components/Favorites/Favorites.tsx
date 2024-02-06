import { useEffect, useState } from 'react';
import { Link } from '@remix-run/react';
import CardLayout from '../CardLayout/CardLayout';
import { PokemonFav } from '~/types';



const Favorites = () => {
	const [favorites, setFavorites] = useState<PokemonFav[]>([]);

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
				<div className='flex flex-wrap justify-center gap-4'>
					{favorites.map((pokemon, index) => (
						<Link
							relative='route'
							to={`/${pokemon.name}`}
							key={pokemon.name + index}
						>
							<CardLayout
								id={pokemon.id}
								name={pokemon.name}
								// img={pokemon.sprites.front_default}
								// img={pokemon.sprites.other['dream_world'].front_default}
								img={pokemon.sprites.other['official-artwork'].front_default}
								// img={pokemon.sprites.front_default}
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
