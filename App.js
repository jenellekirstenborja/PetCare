import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MedicalRecordsProvider } from './components/MedicalRecordContext';
import Intro from './components/Intro';
import Auth from './components/Auth';
import Home from './components/Home';
import Splash2 from './components/Splash2';
import PetInput from './components/PetInput';
import HomeSplash from './components/HomeSplash';
import MagnifyingGlassDog from './components/MagnifyingGlassDog';
import UserProfile from './components/UserProfile';
import Post from './components/Post';
import Calendar from './components/Calendar';
import MedicalHomeScreen from './components/MedicalHomeScreen';
import RecordListScreen from './components/RecordListScreen';
import AddRecordScreen from './components/AddRecordScreen';
import CalendarEvent from './components/CalendarEvent';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MedicalRecordsProvider>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="HomeSplash" component={HomeSplash} options={{ headerShown: false }} />
          <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={Auth} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={Auth} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Splash2" component={Splash2} options={{ headerShown: false }}/>
          <Stack.Screen name="PetInput" component={PetInput} options={{ headerShown: false }}/>
          <Stack.Screen name="MagnifyingGlassDog" component={MagnifyingGlassDog} options={{ headerShown: false }}/>
          <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }}/>
          <Stack.Screen name="CalendarEvent" component={CalendarEvent} options={{ headerShown: false }}/>
          <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }}/>
          <Stack.Screen name="Post" component={Post} options={{ headerShown: false }}/>
          <Stack.Screen name="MedicalHomeScreen" component={MedicalHomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="RecordList" component={RecordListScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="AddRecord" component={AddRecordScreen} options={{ headerShown: false }}/>
          
        </Stack.Navigator>
      </MedicalRecordsProvider>
    </NavigationContainer>
  );
};

export default App;