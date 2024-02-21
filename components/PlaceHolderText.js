import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from 'react'; 

import Colors from "../constants/Colors";
import Window from "../constants/Window";

function PlaceHolderText({placeHolder, isPwd, lastNameRef}){

    const [inputValue, setInputValue] = useState('');

    if(isPwd){
        return(
            <View style={styles.inputView}>
                <TextInput 
                secureTextEntry
                style={styles.inputText} 
                placeholder={placeHolder} 
                placeholderTextColor={Colors.placeholder} 
                onChangeText={text => setInputValue(text)}
                />
            </View>
        );
    }else{
        return(
            <View style={styles.inputView}>
                <TextInput 
                style={styles.inputText} 
                placeholder={placeHolder} 
                placeholderTextColor={Colors.placeholder} 
                onChangeText={text => setInputValue(text)}
                // defaultValue=""
                // ref={lastNameRef}
                // onSubmitEditing={() => {
                //     lastNameRef.current.focus();
                // }}
                />
            </View>
        );
    }
}
export default PlaceHolderText;

const styles = StyleSheet.create({
    inputView:{
        width: Window.isWeb ? '40%' : '80%',
        backgroundColor:Colors.primary500,
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"white"
    },
});