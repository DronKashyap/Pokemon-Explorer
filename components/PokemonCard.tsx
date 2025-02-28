"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pokemon } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${pokemon.id}`} className="block transition-transform hover:scale-105">
      <Card className="h-full overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="capitalize text-center">
            {pokemon.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center p-4">
          <div className="relative h-40 w-40">
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
              priority={pokemon.id <= 20}
            />
          </div>
        </CardContent>
        <CardFooter className="bg-secondary py-2 text-center justify-center">
          <p className="text-sm font-medium">#{pokemon.id.toString().padStart(3, '0')}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}