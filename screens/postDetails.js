import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function PostDetails({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.postContainer}>
                <Text style={globalStyles.titleText}> {navigation.getParam('userName')} </Text>
                <Text style={globalStyles.paragraph}> {navigation.getParam('post')} </Text>
                <Text style={globalStyles.paragraph}> Likes: { navigation.getParam('likes') } | Posted: {navigation.getParam('postTime')}</Text>
            </View>
        </View>
    )
}