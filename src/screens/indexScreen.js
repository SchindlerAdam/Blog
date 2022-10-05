import React from "react";
import {View, Text, TextInput, FlatList, Button} from "react-native"

import BlogContext from "../context/BlogContext";
import { useContext } from "react";


const IndexScreen = ({navigation}) => {


    const data = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={data.blogPosts}
                keyExtractor = {(blogItem) => blogItem.id}
                renderItem = {(element) => {
                    return <Text>{element.item.title}</Text>
                }}
            />
            <Button
                title="New blog post"
                onPress={() => data.addNewBlogPost()}
            />
        </View>
    )
};


export default IndexScreen;