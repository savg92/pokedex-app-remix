import { Suspense, useEffect, useState } from 'react';
import { Link } from '@remix-run/react';
import CardLayout from '../CardLayout/CardLayout';
import { PokemonFav } from '~/types';

const Favorites = () => {
	const [favorites, setFavorites] = useState<PokemonFav[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = () => {
		setIsLoading(true);
		setError(null);

		if (typeof window !== 'undefined') {
			const favoritesFromStorage = JSON.parse(
				localStorage.getItem('favorites') || '[]'
			);

			Promise.all(
				favoritesFromStorage.map((pokemon: string) =>
					fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
						(response) => {
							if (!response.ok) {
								throw new Error('Failed to fetch Pokemon');
							}
							return response.json();
						}
					)
				)
			)
				.then((data) => {
					setFavorites(data);
					setIsLoading(false);
				})
				.catch((error) => {
					setError(error.message);
					setIsLoading(false);
				});
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (error) {
		return (
			<div>
				Error: {error}
				<button onClick={fetchData}>Retry</button>
			</div>
		);
	}

	return (
		<>
			<Suspense
				fallback={
					<>
						{isLoading && (
							<>
								<div className='animate-pulse flex flex-wrap justify-center gap-4'>
									{Array(20)
										.fill(null)
										.map((_, index) => (
											<CardLayout
												key={index}
												id={index}
												name='Loading...'
												img='https://via.placeholder.com/150'
												type='loading'
											/>
										))}
								</div>
							</>
						)}
					</>
				}
			>
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
									img={pokemon.sprites.other['official-artwork'].front_default}
									type={pokemon.types[0].type.name}
								/>
							</Link>
						))}
					</div>
				) : (
					<p>You have no favorite Pokémon yet.</p>
				)}
			</Suspense>
		</>
	);
};

export default Favorites;
