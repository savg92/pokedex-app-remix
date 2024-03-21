### Pokedex - Remix

This is a simple pokedex app that uses the [PokeAPI](https://pokeapi.co/) to display information about different pokemons. The app is built using Remix and TailwindCSS.

## Features

- Search for pokemons by name
- View detailed information about a pokemon
- View a list of all pokemons with pagination (original 151 pokemons, 20 per page; in case you want to see all pokemons, you can change the limit in the `getPokemons` function in `src/routes/index.tsx`)

## Installation

1. Clone the repository
2. Install the dependencies

```bash
npm install
```

```bash
bun install
```

3. Start the development server

```bash
npm run dev
```

```bash
bun dev
```

4. Open the app in your browser at `http://localhost:3000`

## Technologies

- [Node.js](https://nodejs.org/en/)
- [Remix](https://remix.run/)
- [TailwindCSS](https://tailwindcss.com/)
- [PokeAPI](https://pokeapi.co/)
- [TypeScript](https://www.typescriptlang.org/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://pokedex-app-remix.vercel.app/)
