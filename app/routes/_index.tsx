import type { MetaFunction } from "@remix-run/node";
import { ModeToggle } from "~/components/mode-toggle";

export const meta: MetaFunction = () => {
  return [
    { title: "Pokedex" },
    { name: "Pokedex app", content: "Welcome to your Pokedex!" },
  ];
};

export default function Index() {
  return (
		<div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }} className="font-sans line-height-1.8">
			<h1
      className="text-4xl font-bold text-center mt-20 mb-10"
      >Welcome to Remix</h1>
			<ul>
				<li>
					<a
						target='_blank'
						href='https://remix.run/tutorials/blog'
						rel='noreferrer'
					>
						15m Quickstart Blog Tutorial
					</a>
				</li>
				<li>
					<a
						target='_blank'
						href='https://remix.run/tutorials/jokes'
						rel='noreferrer'
					>
						Deep Dive Jokes App Tutorial
					</a>
				</li>
				<li>
					<a
						target='_blank'
						href='https://remix.run/docs'
						rel='noreferrer'
					>
						Remix Docs
					</a>
				</li>
			</ul>
			<ModeToggle />
		</div>
	);
}
