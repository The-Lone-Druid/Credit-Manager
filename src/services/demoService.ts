// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Type declarations
export type GetPokemonParams = {
  limit?: number;
  offset?: number;
};

export type GetPokemonByNameParams = {
  name?: string;
};

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    // gets a list of all pokemons
    getPokemons: builder.mutation({
      query: ({limit, offset}: GetPokemonParams) => ({
        url: `pokemon?offset=${offset}&limit=${limit}`,
      }),
    }),
    // gets a pokemon by name
    getPokemonByName: builder.mutation({
      query: ({name}: GetPokemonByNameParams) => ({
        url: `post/${name}`,
        method: 'GET',
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetPokemonsMutation, useGetPokemonByNameMutation} = pokemonApi;
