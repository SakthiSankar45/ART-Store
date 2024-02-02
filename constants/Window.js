import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Window = {
    width : windowWidth,
    height : windowHeight,
    isWeb : windowWidth>400,
    // isIOS : Platform.OS === 'ios',
}

export default Window;