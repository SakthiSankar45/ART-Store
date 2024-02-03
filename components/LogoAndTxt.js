import { View, StyleSheet , Image, Text} from "react-native";

import Colors from "../constants/Colors";

function LogoAndTxt({title}){
    return(
        <View style={styles.container}>
            <Image style={styles.logoImg} source={require('../assets/images/logo.png')}/>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}
export default LogoAndTxt;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontWeight: "bold",
        fontSize:50,
        color: Colors.primary700,
        marginBottom: 40,
    },
    logoImg:{
        width: 120,
        height: 120,
    },
});
