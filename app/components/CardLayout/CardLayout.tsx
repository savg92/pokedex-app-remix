import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

type Pokemon = {
	id: number;
	name: string;
	img: string;
	type: string;
};

const CardLayout = ({ id, name, img, type }: Pokemon) => {
	return (
		<>
			<Card
				key={id}
				className='bg-white rounded-lg shadow-lg p-4 dark:bg-gray-600 transform transition duration-300 hover:scale-105 group'
			>
				<CardHeader>
					<img
						src={img}
						alt={name}
						className='transition group-hover:scale-125'
					/>
					<p className='text-xs text-gray-500 dark:text-gray-400'>Id: {id}</p>
				</CardHeader>
				<CardContent>
					<CardTitle>{name[0].toUpperCase() + name.slice(1)}</CardTitle>
				</CardContent>
				<CardFooter>Type: {type[0].toUpperCase() + type.slice(1)}</CardFooter>
			</Card>
		</>
	);
};

export default CardLayout;
