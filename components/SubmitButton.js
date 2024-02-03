import { View, StyleSheet, Text, Pressable } from "react-native";

import Window from "../constants/Window";
import Colors from "../constants/Colors";

function SubmitButton({onPress, actionTitle}){
    return(
        <View style={styles.container}>
            <Pressable onPress = {onPress} style={styles.loginBtn}>
                <Text>{actionTitle} </Text>
            </Pressable>
        </View>
    );
}
export default SubmitButton;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        width: Window.isWeb ? '40%' : '80%',
    },
    loginBtn:{
        width: Window.isWeb ? '40%' : '80%',
        backgroundColor: Colors.primary600,
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10
    },
});