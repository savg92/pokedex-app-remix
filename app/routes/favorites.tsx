import { MetaFunction } from "@remix-run/node";
import Favorites from "~/components/Favorites/Favorites";

export const meta: MetaFunction = () => {
	return [{ title: `Pokedex - Favorites` }];
};

const favorites = () => {
  return (
    <>
        <h1>Your Favorite Pokémon</h1>
        <Favorites />
    </>
  )
}

export default favorites