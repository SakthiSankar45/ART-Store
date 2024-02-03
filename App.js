import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View , Image} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Window from './constants/Window';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import Background from './components/Background';

//Splash Screen Loading!..
SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

//Splash Screen Loading!..
  if (!appIsReady) {
    return (
      <>
        <StatusBar style='light'/>
        <Background>
          <View style={styles.logoView}>
              <Image style={styles.logoImg} source={require('./assets/images/logo.png')}/>
            </View>
        </Background>
      </>
    );
  }

// Normal Application after LaunchScreen

const Stack = createNativeStackNavigator();

return (
  <View style={styles.container} onLayout={onLayoutRootView}>
    <StatusBar style='light'/>
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}> */}
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={LoginScreen}
        />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </View>
  );
}

const styles = StyleSheet.create({
  logoView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg:{
    width: Window.isWeb ? 500 : 250,
    height: Window.isWeb ? 500 : 250,
  },
  container: {
    flex: 1,
  },
});