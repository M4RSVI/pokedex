import React, { useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Card from '../Components/Card.js';

const Home = () => {
  const listaDePokemons = [
    {
      name: 'Bulbasauro',
      id: '001',
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    },
    {
      name: 'Ivisauro',
      id: '002',
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    },
    {
      name: 'Venosauro',
      id: '003',
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    },
  ];

  return (
    <ScrollView>
      {listaDePokemons.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            pokeId={pokemon.id}
            pokeName={pokemon.name}
            pokeImage={pokemon.url}
          />
        );
      })}
    </ScrollView>
  );
};

export default Home;
