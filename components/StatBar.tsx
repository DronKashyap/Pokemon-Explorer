"use client"

import React from 'react';
import { Progress } from '@/components/ui/progress';

interface StatBarProps {
  statName: string;
  value: number;
}

export default function StatBar({ statName, value }: StatBarProps) {
  const getStatColor = (statName: string) => {
    const statColors: Record<string, string> = {
      hp: 'bg-red-500',
      attack: 'bg-orange-500',
      defense: 'bg-yellow-500',
      'special-attack': 'bg-blue-500',
      'special-defense': 'bg-green-500',
      speed: 'bg-pink-500',
    };

    return statColors[statName] || 'bg-gray-500';
  };

  const formatStatName = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{formatStatName(statName)}</span>
        <span className="text-sm font-medium">{value}</span>
      </div>
      <Progress 
        value={value} 
        max={255} 
        className="h-2"
        style={{ 
          '--progress-background': getStatColor(statName) 
        } as React.CSSProperties}
      />
    </div>
  );
}