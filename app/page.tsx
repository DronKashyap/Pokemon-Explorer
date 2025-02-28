import React from 'react';
import { getPokemonList, getPokemonImageUrl } from '@/lib/api';
import { Pokemon } from '@/lib/types';
import ClientPage from './client-page';

async function getPokemons() {
  const data = await getPokemonList(151); // Get first 151 Pokemon (Gen 1)
  
  const pokemons: Pokemon[] = data.results.map((pokemon, index) => {
    const id = index + 1;
    return {
      id,
      name: pokemon.name,
      url: pokemon.url,
      image: getPokemonImageUrl(id),
    };
  });
  
  return pokemons;
}

export default async function Home() {
  const pokemons = await getPokemons();
  
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Pokémon Explorer
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover and learn about your favorite Pokémon from the original 151 Kanto region collection
        </p>
      </div>
      
      <ClientPage initialPokemons={pokemons} />
    </main>
  );
}