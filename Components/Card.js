import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const estilos = StyleSheet.create({
  card: {
        backgroundColor: '#8BBE8A',
        width: 304,
        height: 115,
        borderRadius: 10,
        padding: 20,
        marginTop: 30,
        display: "flex",
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    pokeName: {
      color: "#FFFFFF",
      fontSize: 26,
      fontWeight: 'bold',
    },
    pokeId: {
      fontSize: 12,
      color: '#17171b',
      opacity: 0.6,
      fontWeight: 'bold',
    },
    pokeImage: {
      width: 130,
      height: 130,
      marginTop: -45
    }
})

const Card = ({ pokeId, pokeName, pokeImage }) => {

  return (
    <View style={estilos.card}>
      <View>
      <Text style={estilos.pokeId}>#{pokeId}</Text>
      <Text style={estilos.pokeName}>{pokeName}</Text>
      </View>
      <Image style={estilos.pokeImage} 
      source={ {uri: pokeImage} }
      />
    </View>
  );
}

export default Card;