import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View , Image, ImageBackground} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import {LinearGradient} from 'expo-linear-gradient';
import Imported from './constants/Imported';
import { StatusBar } from 'expo-status-bar';

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
        <LinearGradient colors= {[Imported.Colors.primary500, Imported.Colors.primary600]} style={styles.splash}>
          <ImageBackground source={require('./assets/images/images.jpeg')} style={styles.splash} imageStyle= {styles.backGroundImage}>
            <View style={styles.logoView}>
              <Text style={styles.logoTxt}>ARTS <Text style={styles.innerLogoTxt}>Maligai Store</Text></Text>
            </View>
          </ImageBackground>
        </LinearGradient>
      </>
    );
  }

// Normal Application after LaunchScreen
return (
    <View
      style={styles.container}
      onLayout={onLayoutRootView}>
      <Text>We Have Entered into the App!..</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  splash:{
    flex: 1, 
    width: null,
    height: null,
  },
  backGroundImage:{
    opacity: 0.15
  },
  logoView:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTxt:{
    color: Imported.Colors.primary700,
    fontSize: Imported.Window.isWeb ? 60 : 30,
    fontFamily: Imported.Window.isIOS ? 'Futura' : 'Roboto',
    fontWeight: 'bold',
  },
  innerLogoTxt:{
    color: Imported.Colors.primary800,
    fontSize: Imported.Window.isWeb ? 40 : 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});