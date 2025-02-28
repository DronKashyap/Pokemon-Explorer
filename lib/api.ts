import { PokemonDetail, PokemonListResponse } from './types';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonList(limit = 151, offset = 0): Promise<PokemonListResponse> {
  const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch Pokemon list');
  }
  
  return response.json();
}

export async function getPokemonDetail(nameOrId: string): Promise<PokemonDetail> {
  const response = await fetch(`${API_BASE_URL}/pokemon/${nameOrId.toLowerCase()}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon details for ${nameOrId}`);
  }
  
  return response.json();
}

export function getPokemonImageUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}