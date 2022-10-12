import React from "react";
import {View, FlatList, TouchableOpacity} from "react-native"
import { Context as BlogContext } from "../context/BlogContext";
import { useContext } from "react";
import BlogItem from "../components/blogItem";

const IndexScreen = ({navigation}) => {

    const blogContextData = useContext(BlogContext);

    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator = {false}
                data={blogContextData.currentState}
                keyExtractor = {(blogItem) => blogItem.id}
                renderItem = {(element) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("showBlogPostScreen", {id: element.item.id})}>
                            <BlogItem
                                blogData = {element.item}
                                blogContextData = {blogContextData}
                                navigation = {navigation}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
};


export default IndexScreen;