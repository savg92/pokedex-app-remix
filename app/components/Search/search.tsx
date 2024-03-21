import { Form } from '@remix-run/react';
import { handleSubmit } from '~/handlers';

const Search = ({ navigate, searchTerm, setSearchTerm }: any) => {
  return (
		<>
			<Form
				onSubmit={(e: any) => handleSubmit(e, navigate, searchTerm)}
				className='flex justify-center gap-4 p-4'
			>
				<input
					type='text'
					placeholder='Search by name or id'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className='bg-gray-200 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-700 dark:text-white'
				/>
				<button
					type='submit'
					className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
						searchTerm.length === 0
							? 'cursor-not-allowed bg-gray-300 hover:bg-gray-300'
							: ''
					}`}
				>
					Search
				</button>
			</Form>
		</>
	);
}

export default Search