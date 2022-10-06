import React from "react";
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from "react-native"

import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 

import { Context as BlogContext } from "../context/BlogContext";
import { useContext } from "react";


const IndexScreen = () => {


    const data = useContext(BlogContext);

    return (
        <View>
            <TouchableOpacity style = {styles.addButton} onPress = {() => data.actions.addNewBlogPost(data.dispatch)}>
                <Ionicons style = {styles.addIcon} name="add" />
                <Text style = {styles.addText}>Add new post</Text>
            </TouchableOpacity>
            <FlatList
                showsVerticalScrollIndicator = {false}
                data={data.currentState}
                keyExtractor = {(blogItem) => blogItem.id}
                renderItem = {(element) => {
                    return (
                        <View style = {styles.blogItemView}>
                            <Text style = {styles.blogItem}>{element.item.title} - {element.item.id}</Text>
                            <TouchableOpacity onPress={() => data.actions.deleteBlogPost(data.dispatch, element.item.id)}>
                                <MaterialIcons style = {styles.blogIcon} name="delete" />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    addButton: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20
    },
    addIcon: {
        fontSize: 25
    },
    addText: {
        fontSize: 20
    },
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