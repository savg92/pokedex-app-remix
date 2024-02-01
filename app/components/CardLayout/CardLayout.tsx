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
			<Card key={id}>
				<CardHeader>
					<CardTitle>{name}</CardTitle>
					<CardDescription>
						Id: {id}
						<br />
						Type: {type}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<img
						src={img}
						alt={name}
					/>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card>
		</>
	);
};

export default CardLayout;
