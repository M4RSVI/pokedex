import React from 'react';
import { Text, View } from 'react-native';
import Home from './Screens/Home.js';
import MeuNome, { soma } from './Screens/MeuNome.js'

const App = () => {

  soma();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        <Home />
      </Text>
    </View>
  );
}

export default App;