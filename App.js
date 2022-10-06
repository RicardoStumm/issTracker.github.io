import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/Home'
import IssLocations from './screens/IssLocation'
import MeteorsScreen from './screens/Meteors'
import 'react-native-gesture-handler'
import IssLocation from './screens/IssLocation'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocation} />
        <Stack.Screen name="MeteorsScreen" component={MeteorsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
