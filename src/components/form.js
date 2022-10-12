import React from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 


const Form = (props) => {


    return (

        <View style = {styles.container}>
            
        <View style = {styles.titleContainer}>
            <View style = {styles.titleAndIconContainer}>
                <Text style = {styles.titleText}>Title</Text>
                <MaterialIcons name="title" style = {styles.iconStyle} />
            </View>
            <TextInput
                style = {styles.textInputStyle}
                value = {props.titleState}
                multiline = {true}
                textAlignVertical = "top"
                onChangeText = {(newText) => props.setTitleState(newText)}
            />
        </View>

        <View style = {styles.contentContainer}>
            <View style = {styles.titleAndIconContainer}>
                <Text style = {styles.titleText}>Content</Text>
                <MaterialIcons name="edit" style = {styles.iconStyle}/>
            </View>
            <TextInput 
                style = {styles.textInputStyle}
                value = {props.contentState}
                multiline = {true}
                textAlignVertical = "top"
                onChangeText = {(newText) => props.setContentState(newText)}
            />
        </View>

        <View style = {styles.buttonContainer}>
            <TouchableOpacity style = {styles.buttonStyle} onPress = {() => props.submit()}>
                <Text style = {styles.buttonText}>Save</Text>
                <MaterialIcons name="save" style = {styles.buttonIcon}/>
            </TouchableOpacity>
        </View>

    </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    titleContainer: {
        width: 350,
        marginVertical: 20

        
    },
    titleAndIconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    titleText: {
        fontSize: 20
    },
    iconStyle: {
        fontSize: 24
    },
    textInputStyle: {
        marginTop: 10,
        width: 350,
        height: 40,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        padding: 10

    },
    contentContainer: {
        width: 350,
        marginVertical: 20

    },
    buttonContainer: {
        backgroundColor: "#75F56B",
        justifyContent: "center",
        width: 200,
        height: 40,
        borderRadius: 5
    },
    buttonStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        marginRight: 2,

    },
    buttonIcon: {
        fontSize: 20,
        marginLeft: 2
    }

});

export default Form;