import { Outlet } from '@remix-run/react';
import Header from './Header/header';
import { Footer } from './Footer/Footer';
import { Fragment } from 'react';

const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen justify-between'>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
