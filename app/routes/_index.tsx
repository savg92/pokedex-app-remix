import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header/header";

export const meta: MetaFunction = () => {
  return [
    { title: "Pokedex" },
    { name: "Pokedex app", content: "Welcome to your Pokedex!" },
  ];
};

export default function Index() {
  return (
		<>
			<main>
				<h1>Welcome to your Pokedex!</h1>
			</main>
		</>
	);
}
