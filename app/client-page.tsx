"use client"

import React, { useState, useEffect } from 'react';
import { Pokemon } from '@/lib/types';
import PokemonGrid from '@/components/PokemonGrid';
import SearchBar from '@/components/SearchBar';

interface ClientPageProps {
  initialPokemons: Pokemon[];
}

export default function ClientPage({ initialPokemons }: ClientPageProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>(initialPokemons);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>(initialPokemons);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setFilteredPokemons(pokemons);
      return;
    }

    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
  };

  return (
    <>
      <div className="mb-8">
        <SearchBar onSearch={handleSearch} />
      </div>
      
      {filteredPokemons.length > 0 ? (
        <PokemonGrid pokemons={filteredPokemons} />
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No Pokémon found. Try a different search term.</p>
        </div>
      )}
    </>
  );
}