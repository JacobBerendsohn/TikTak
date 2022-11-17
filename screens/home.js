import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {

    const [posts, setPosts] = useState([
        {key: '1', userID: 1, userName: '@dauibfds', post: 'My first TikTak', likes: '0', postTime: '10:35PM'},
        {key: '2', userID: 2, userName: '@uwiqnzw', post: 'Lorem Ipsum', likes: '0', postTime: '11:21PM'},
        {key: '3', userID: 3, userName: '@pewions', post: 'React Native', likes: '0', postTime: '10:56PM'},
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={posts}
                renderItem={({ item }) => (
                    <TouchableOpacity style={globalStyles.postContainer} onPress={() => navigation.navigate('PostDetails', item)}>
                        <Text style={globalStyles.titleText}> { item.userName } </Text>
                        <Text style={globalStyles.paragraph}> { item.post } </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}