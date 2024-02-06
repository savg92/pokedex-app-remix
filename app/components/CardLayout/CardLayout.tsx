import { Badge } from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Pokemon } from '~/types';

const CardLayout = ({ id, name, img, type }: Pokemon) => {
	return (
		<>
			<Card
				key={id}
				className='bg-white rounded-lg shadow-lg p-4 dark:bg-gray-600 transform transition duration-300 hover:scale-105 group sm:w-48 w-60 flex flex-col justify-between gap-2'
			>
				<CardHeader>
					<img
						src={img}
						alt={name}
						className='transition group-hover:scale-125 mx-auto sm:w-24 w-32 sm:h-24 h-32'
					/>
					<p className='text-xs text-gray-500 dark:text-gray-400'>Id: {id}</p>
					<CardTitle>{name[0].toUpperCase() + name.slice(1)}</CardTitle>
				</CardHeader>
				<CardContent>
					Type:
					<Badge
						className={`rounded-full w-16 flex justify-center items-center ml-2 ${
							type === 'fire'
								? 'bg-red-500'
								: type === 'water'
								? 'bg-blue-500'
								: type === 'grass'
								? 'bg-green-500'
								: type === 'electric'
								? 'bg-yellow-500'
								: type === 'ice'
								? 'bg-blue-300'
								: type === 'fighting'
								? 'bg-red-700'
								: type === 'poison'
								? 'bg-purple-500'
								: type === 'ground'
								? 'bg-yellow-800'
								: type === 'flying'
								? 'bg-blue-200'
								: type === 'psychic'
								? 'bg-purple-400'
								: type === 'bug'
								? 'bg-green-400'
								: type === 'rock'
								? 'bg-gray-500'
								: type === 'ghost'
								? 'bg-purple-800'
								: type === 'dark'
								? 'bg-gray-800'
								: type === 'dragon'
								? 'bg-red-800'
								: type === 'steel'
								? 'bg-gray-300'
								: type === 'fairy'
								? 'bg-pink-300'
								: type === 'normal'
								? 'bg-gray-400'
								: type === 'unknown'
								? 'bg-gray-600'
								: type === 'shadow'
								? 'bg-black'
								: 'bg-gray-500'
						}`}
					>
						{type[0].toUpperCase() + type.slice(1)}
					</Badge>
				</CardContent>
			</Card>
		</>
	);
};

export default CardLayout;
