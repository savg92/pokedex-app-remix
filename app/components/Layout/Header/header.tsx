import { Link } from '@remix-run/react';
import { ModeToggle } from './mode-toggle';
import Logo from '../../../assets/pokemon.svg';

const headerLinks = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'Favorites',
		path: '/favorites',
	},
];

const Header = () => {
	return (
		<>
			<header className='flex justify-between items-center p-4'>
				<Link
					to='/'
					className='flex items-center gap-2'
				>
					<img
						src={Logo}
						alt='Logo'
						className='w-20 h-10'
					/>
				</Link>
				<nav>
					<ul
						className='flex gap-8 text-lg font-semibold tracking-wider'
					>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/favorites'>Favorites</Link>
						</li>
					</ul>
				</nav>
				<ModeToggle />
			</header>
		</>
	);
};

export default Header;
