import { StyleSheet, View , Image, ImageBackground} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import Colors from '../constants/Colors';


function Background({children}){
    return(
      <LinearGradient colors= {[Colors.primary500, Colors.primary600, Colors.primary700]} style={styles.splash}>
        <ImageBackground 
          source={require('../assets/images/splash.jpeg')} 
          style={styles.splash} 
          imageStyle= {styles.backGroundImage}
        >
            {children}
        </ImageBackground>
      </LinearGradient>
    );
}
export default Background;

const styles = StyleSheet.create({
    splash:{
        flex: 1, 
        width: '100%',
        height: '100%',
      },
      backGroundImage:{
        opacity: 0.3
      },
});