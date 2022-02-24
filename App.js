import React from 'react';
import { StyleSheet,
View,
Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './src/Detail';
import Page from './src/Page';


const Stack = createNativeStackNavigator();

const App= () => {
  

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ title: 'Detail' ,headerShown:false}}
          />
          <Stack.Screen
            name="Page"
            component={Page}
            options={{ title: 'Page' ,headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
  );
};

const styles = StyleSheet.create({
 
});

export default App;
