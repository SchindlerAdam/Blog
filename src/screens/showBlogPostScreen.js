import {React, useContext} from "react";
import {View, Text, StyleSheet} from "react-native";

import { Context as BlogContext } from "../context/BlogContext";


const ShowBlogPostScreen = ({navigation,route}) => {

    const blogData = useContext(BlogContext);

    const paramObject = route.params;

    const blogPost = blogData.currentState.find((blogItem) => blogItem.id === paramObject.id);



    return (
        <View>
            <Text>BLOG ID: {blogPost.id}</Text>
            <Text>BLOG TITLE: {blogPost.title}</Text>
            <Text>BLOG CONTENT: {blogPost.content}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

});

export default ShowBlogPostScreen;