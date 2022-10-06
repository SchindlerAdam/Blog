import React from "react";
import {View, Text, FlatList, Button} from "react-native"

import { Context as BlogContext } from "../context/BlogContext";
import { useContext } from "react";


const IndexScreen = () => {


    const data = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <FlatList
                data={data.currentState}
                keyExtractor = {(blogItem) => blogItem.id}
                renderItem = {(element) => {
                    return (
                        <Text>{element.item.title}</Text>
                    )
                }}
            />
            <Button
                title="New blog post"
                onPress={() => data.actions.addNewBlogPost(data.dispatch)}
            />
        </View>
    )
};


export default IndexScreen;