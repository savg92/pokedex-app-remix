import { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import Favorites from '~/components/Favorites/Favorites';

export const meta: MetaFunction = () => {
	return [{ title: `Pokedex - Favorites` }];
};

const favorites = () => {
	return (
		<>
			<h1 className='my-6 border-b-2 text-center text-3xl'>
				Your Favorite Pokémon
			</h1>
			<Favorites />
			<Link to='/'>
				<p>﹤ Back to the Pokedex</p>
			</Link>
		</>
	);
};

export default favorites;
