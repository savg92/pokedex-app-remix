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

export type { LoaderDataGetPokemons, Pokemon, LoaderDataGetPokemon };