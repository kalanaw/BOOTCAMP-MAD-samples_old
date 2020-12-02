import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20
          }}
        >
          <View style={{ backgroundColor: "blue", flex: 0.3 }} />
          <View style={{ backgroundColor: "red", flex: 0.5 }} />
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;