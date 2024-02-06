import { getPokemons } from "./models/pokemon.server";

type LoaderData = {
	data: Awaited<ReturnType<typeof getPokemons>>;
};

type Pokemon = {
	id: number;
	name: string;
	img: string;
	type: string;
};

export type { LoaderData, Pokemon };