import React from 'react';
import { Entypo, Octicons, AntDesign, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { globalStyles } from "../styles/global";
import { HomeNav } from './homeStack';

import PostDetails from '../screens/postDetails';
import Home from '../screens/home';
import MyPosts from '../screens/myPosts';
import Popular from '../screens/popularPosts';
import CreatePost from '../screens/createPost';
import MyAccount from '../screens/myAccount';

const Tab = createBottomTabNavigator();

const shadowStyle = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5, 
        elevation: 5
    }
});

const CustomPostButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ... shadowStyle.shadow
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#EEF5FC',
                    borderRadius: 15,
                    height: 90,
                    ... shadowStyle.shadow
                }
            }}
        >
            <Tab.Screen name='Home' component={ HomeNav } options={{
                headerStyle: {
                    backgroundColor: '#1A45B1',
                },
                headerTintColor: '#EEF5FC',
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Entypo name="home" size={24} style={{color: focused ? '#1A45B1' : '#000'}} /> 
                        <Text style={{ color: focused ? '#1A45B1' : '#000', fontSize: 12 }}> HOME </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name='Popular Posts' component={ Popular } options={{
                headerStyle: {
                    backgroundColor: '#1A45B1',
                },
                headerTintColor: '#EEF5FC',
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Octicons name="graph" size={24} style={{color: focused ? '#1A45B1' : '#000'}} />
                        <Text style={{ color: focused ? '#1A45B1' : '#000', fontSize: 12 }}> POPULAR </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name='Create Post' component={ CreatePost } options={{
                headerStyle: {
                    backgroundColor: '#1A45B1',
                },
                headerTintColor: '#EEF5FC',
                tabBarIcon: ({focused}) => (
                    <AntDesign name="pluscircle" size={60} style={{color: focused ? '#1A45B1' : '#000'}} /> 
                ),
                tabBarButton: (props) => (
                    <CustomPostButton {... props} />
                )
            }}/>
            <Tab.Screen name='My Posts' component={ MyPosts } options={{
                headerStyle: {
                    backgroundColor: '#1A45B1',
                },
                headerTintColor: '#EEF5FC',
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Ionicons name="hand-left-sharp" size={24} style={{color: focused ? '#1A45B1' : '#000'}} /> 
                        <Text style={{ color: focused ? '#1A45B1' : '#000', fontSize: 12 }}> BY ME </Text>
                    </View>
                )
            }}/>
            <Tab.Screen name='My Account' component={ MyAccount } options={{
                headerStyle: {
                    backgroundColor: '#1A45B1',
                },
                headerTintColor: '#EEF5FC',
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Ionicons name="person" size={24} style={{color: focused ? '#1A45B1' : '#000'}} /> 
                        <Text style={{ color: focused ? '#1A45B1' : '#000', fontSize: 12 }}> ACCOUNT </Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    );
}

export default Tabs; 