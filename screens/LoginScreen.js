import { View, StyleSheet, Pressable, Text} from "react-native";

import Background from "../components/Background";
import PlaceHolderText from "../components/PlaceHolderText";
import LogoAndTxt from "../components/LogoAndTxt";
import SubmitButton from "../components/SubmitButton";

function onPressForgotPassword(){

}

function onPressLogin(){

}

function LoginScreen({navigation}){

    // const [state,setState] = useState({email: '',password: ''});

    function onPressSignUp(){
        return(
            navigation.navigate('SignUp')
        );
    }
    return(
        <Background>
        <View style={styles.container}>
            <LogoAndTxt title={"Login"}/>
            <PlaceHolderText placeHolder={"Email"}/>
            <PlaceHolderText placeHolder={"Password"} isPwd={true}/>
            <Pressable onPress = {onPressForgotPassword}>
                <Text style={styles.forgotAndSignUpText}>Forgot Password?</Text>
            </Pressable>
            <SubmitButton onPress={onPressLogin} actionTitle={'LOGIN'}/>
            <Pressable onPress = {onPressSignUp}>
                <Text style={styles.forgotAndSignUpText}>Sign Up</Text>
            </Pressable>
        </View>
        </Background>
    );
}
export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    forgotAndSignUpText:{
        color:"white",
        fontSize: 15,
    },
});