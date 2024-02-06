import { Outlet } from '@remix-run/react';
import Header from './Header/header';
import { Footer } from './Footer/Footer';

const Layout = () => {
	return (
		<>
			<Header />
			<main className='flex-1 flex flex-col  items-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white justify-between'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
