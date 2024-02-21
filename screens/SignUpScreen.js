import { View, StyleSheet} from "react-native";
import React, { useState, useRef } from 'react'; 

import Background from "../components/Background";
import PlaceHolderText from "../components/PlaceHolderText";
import LogoAndTxt from "../components/LogoAndTxt";
import SubmitButton from "../components/SubmitButton";

function onPressSignUp(){
    // if (){

    // }
}

function SignUpScreen(){
    
    const [state,setState] = useState({email: '',password: ''});
    const lastNameRef = useRef();

    return(
        <Background>
        <View style={styles.container}>
            <LogoAndTxt title={"Sign Up"}/>
            <PlaceHolderText placeHolder={"Name"}/>
            <PlaceHolderText placeHolder={"Email"} />
            <PlaceHolderText placeHolder={"Mobile Number"} />
            <PlaceHolderText placeHolder={"Password"} isPwd={true}/>
            <PlaceHolderText placeHolder={"Confirm Password"} isPwd={true}/>
            <SubmitButton onPress={onPressSignUp} actionTitle={'SIGNUP'}/>
        </View>
        </Background>
    );
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});