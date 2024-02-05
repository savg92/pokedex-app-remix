import { createCookie } from '@remix-run/node'; // or cloudflare/deno

// Create cookie for user favorite pokemon
export const userPrefs = createCookie('favoritePokemon', {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
    });
    