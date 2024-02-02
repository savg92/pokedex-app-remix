import { Outlet } from '@remix-run/react';
import Header from './Header/header';
import { Footer } from './Footer/Footer';
import { Fragment } from 'react';

const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen justify-between'>
			<Header />
			<main className='flex-1 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
