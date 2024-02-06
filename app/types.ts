import { getPokemon, getPokemons } from "./models/pokemon.server";

type LoaderDataGetPokemons = {
	data: Awaited<ReturnType<typeof getPokemons>>;
};
type LoaderDataGetPokemon = {
	pokemon: Awaited<ReturnType<typeof getPokemon>>;
};

type Pokemon = {
	id: number;
	name: string;
	img: string;
	type: string;
};

type PokemonFav = {
	id: number;
	name: string;
	sprites: {
		front_default: string;
	};
	types: {
		type: {
			name: string;
		};
	}[];
};

type PaginationComponentProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

export type { LoaderDataGetPokemons, Pokemon, LoaderDataGetPokemon, PokemonFav, PaginationComponentProps };