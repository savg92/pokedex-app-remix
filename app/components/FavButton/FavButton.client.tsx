import { createCookieSessionStorage } from '@remix-run/node';
import { Cookie } from 'lucide-react';
import { useEffect, useState } from 'react';

let mySessionStorage = createCookieSessionStorage({
	cookie: {
		name: '__session',
		secrets: ['s3cr3t'],
	},
});

const FavButton = ({ name }: { name: string }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [favorites, setFavorites] = useState<string[]>([]);

	useEffect(() => {
		// Get the current favorites from the cookies
		const currentFavorites = mySessionStorage.getSession() || [];
		setFavorites(currentFavorites);

		// Check if the pokemon is in the favorites
		setIsFavorite(currentFavorites.includes(name));
	}, []);

	// Add/remove pokemon to the favorites
	const handleAddRemoveToFavorites = (pokemon: string) => {
		const pokemonIndex = favorites.findIndex((p: string) => p === pokemon);
		if (pokemonIndex === -1) {
			favorites.push(pokemon);
		} else {
			favorites.splice(pokemonIndex, 1);
		}

		// Save the updated favorites back to the cookies
		mySessionStorage.commitSession(favorites);
		setFavorites(favorites);
	};

	return (
		<>
			<button
				className='bg-red-500 text-white px-4 py-2 rounded-md'
				onClick={() => handleAddRemoveToFavorites(name)}
			>
				{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
			</button>
		</>
	);
};

export default FavButton;