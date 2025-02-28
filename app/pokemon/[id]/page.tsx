import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPokemonDetail, getPokemonImageUrl } from '@/lib/api';
import PokemonTypeTag from '@/components/PokemonTypeTag';
import StatBar from '@/components/StatBar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PokemonDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data: { results: { name: string; url: string }[] } = await res.json();

  return data.results.map((_, index) => ({
    id: String(index + 1),
  }));
}


export default async function PokemonDetailPage({ params }: PokemonDetailPageProps) {
  const pokemon = await getPokemonDetail(params.id);
  
  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-primary hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        Back to Pokémon List
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card className="overflow-hidden">
            <CardHeader className="bg-secondary">
              <CardTitle className="capitalize text-center text-3xl">
                {pokemon.name} <span className="text-muted-foreground">#{pokemon.id.toString().padStart(3, '0')}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center p-8">
              <div className="relative h-64 w-64">
                <Image
                  src={getPokemonImageUrl(pokemon.id)}
                  alt={pokemon.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Basic Info</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-lg shadow">
                <p className="text-muted-foreground mb-1">Height</p>
                <p className="text-xl font-medium">{pokemon.height / 10} m</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow">
                <p className="text-muted-foreground mb-1">Weight</p>
                <p className="text-xl font-medium">{pokemon.weight / 10} kg</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Types</h2>
            <div className="flex gap-2">
              {pokemon.types.map((typeInfo) => (
                <PokemonTypeTag key={typeInfo.type.name} type={typeInfo.type.name} />
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Abilities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pokemon.abilities.map((abilityInfo) => (
                <li key={abilityInfo.ability.name} className="bg-card p-3 rounded-lg shadow">
                  <span className="capitalize">{abilityInfo.ability.name.replace('-', ' ')}</span>
                  {abilityInfo.is_hidden && (
                    <span className="ml-2 text-xs bg-secondary px-2 py-1 rounded-full">Hidden</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Stats</h2>
          <Card className="p-6">
            {pokemon.stats.map((statInfo) => (
              <StatBar 
                key={statInfo.stat.name} 
                statName={statInfo.stat.name} 
                value={statInfo.base_stat} 
              />
            ))}
          </Card>
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Moves</h2>
            <Card className="p-6">
              <div className="max-h-96 overflow-y-auto">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {pokemon.moves.slice(0, 20).map((moveInfo) => (
                    <li key={moveInfo.move.name} className="bg-secondary p-2 rounded text-center">
                      <span className="capitalize">{moveInfo.move.name.replace('-', ' ')}</span>
                    </li>
                  ))}
                </ul>
                {pokemon.moves.length > 20 && (
                  <p className="text-center text-muted-foreground mt-4">
                    + {pokemon.moves.length - 20} more moves
                  </p>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}