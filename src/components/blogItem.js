import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

const BlogItem = (props) => {
    console.log(props)
     return (
        <View style = {styles.blogItemView}>
            <Text style = {styles.blogItem}>{props.blogData.title} - {props.blogData.id}</Text>

            <View style = {styles.iconContainerView}>
                <TouchableOpacity onPress={() => props.navigation.navigate("editScreen", {id: props.blogData.id})}>
                    <MaterialIcons style = {styles.blogIcon} name="edit" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.blogContextData.actions.deleteBlogPost(props.blogContextData.dispatch, props.blogData.id)}>
                    <MaterialIcons style = {styles.blogIcon} name="delete" />
                </TouchableOpacity>
            </View>

        </View>
     )
};


const styles = StyleSheet.create({
    blogItemView: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    blogItem: {
        fontSize: 15
    },
    blogIcon: {
        fontSize: 20,
        marginHorizontal: 5,
    },
    iconContainerView: {
        flexDirection: "row"
    }
});

export default BlogItem;