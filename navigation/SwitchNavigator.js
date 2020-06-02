import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import SignUpContainer from "../container/SignUpContainer";
import HomeScreenContainer from "../container/HomeScreenContainer";
import MainMenuContainer from "../container/MainMenuContainer";
import LoginContainer from "../container/LoginContainer";
import UserListContainer from "../container/UserListContainer";
import MapContainer from "../container/MapContainer";

const stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <stack.Navigator initialRouteName='Home'>
                    <stack.Screen
                        name='Home'
                        component={ HomeScreenContainer }
                    />

                    <stack.Screen
                        name='Sign Up'
                        component={ SignUpContainer }
                    />

                    <stack.Screen
                        name='Login'
                        component={ LoginContainer }
                    />

                    <stack.Screen
                        name={'Main Menu'}
                        component={ MainMenuContainer }
                    />

                    <stack.Screen
                        name={'Map'}
                        component={ MapContainer }
                    />
                </stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});