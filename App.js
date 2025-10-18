import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper'
import RegisterScreen from './Src/screens/RegisterScreen';
const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen 
          name ="Register"
          component={RegisterScreen}
          options={{title: 'Register'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}