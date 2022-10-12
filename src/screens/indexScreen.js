import React from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native"

import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

import { Context as BlogContext } from "../context/BlogContext";
import { useContext } from "react";


const IndexScreen = ({navigation}) => {


    const data = useContext(BlogContext);

    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator = {false}
                data={data.currentState}
                keyExtractor = {(blogItem) => blogItem.id}
                renderItem = {(element) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("showBlogPostScreen", {id: element.item.id})}>
                            <View style = {styles.blogItemView}>
                                <Text style = {styles.blogItem}>{element.item.title} - {element.item.id}</Text>
                                <Text>{element.item.content}</Text>
                                <TouchableOpacity onPress={() => data.actions.deleteBlogPost(data.dispatch, element.item.id)}>
                                    <MaterialIcons style = {styles.blogIcon} name="delete" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
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
        fontSize: 20
    }
})


export default IndexScreen;