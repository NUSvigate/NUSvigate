import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreenContainer from "../container/HomeScreenContainer";
import SignUpContainer from "../container/SignUpContainer";
import LoginContainer from "../container/LoginContainer";
import MainMenuContainer from "../container/MainMenuContainer";
import MapContainer from "../container/MapContainer";
import ServicesAccommodationContainer from "../container/ServicesAccommodationContainer";
import ServicesPaymentContainer from "../container/ServicesPaymentContainer";
import ServicesFinancialAidContainer from "../container/ServicesFinancialAidContainer";
import ServicesUtilityContainer from "../container/ServicesUtilityContainer";
import ConnectPrinterWindowsContainer from "../container/ConnectPrinterWindowsContainer";
import ConnectPrinterMacContainer from "../container/ConnectPrinterMacContainer";
import EventOneContainer from "../container/EventOneContainer";
import EventTwoContainer from "../container/EventTwoContainer";
import MapDashboardContainer from "../container/MapDashboardContainer";
import LostFoundContainer from "../container/LostFoundContainer";
import LostItemFilterContainer from "../container/LostItemFilterContainer";
import FoundItemFilterContainer from "../container/FoundItemFilterContainer";

const Tab = createBottomTabNavigator();
function ServicesInformation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Accommodation'
                component={ServicesAccommodationContainer}
            />

            <Tab.Screen
                name='Payment'
                component={ServicesPaymentContainer}
            />

            <Tab.Screen
                name='Financial Aid'
                component={ServicesFinancialAidContainer}
            />

            <Tab.Screen
                name='Utility'
                component={ServicesUtilityContainer}
            />
        </Tab.Navigator>
    )
}

const Stack = createStackNavigator();
export default function AppNavigator() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen
                        name='Home'
                        component={HomeScreenContainer}
                    />

                    <Stack.Screen
                        name='Sign Up'
                        component={SignUpContainer}
                        options={{ headerBackTitle: 'Home' }}
                    />

                    <Stack.Screen
                        name='Login'
                        component={LoginContainer}
                    />

                    <Stack.Screen
                        name='Main Menu'
                        component={MainMenuContainer}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name='Map Dashboard'
                        component = {MapDashboardContainer}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name='Map Container'
                        component={MapContainer}
                        options={{ headerShown: false }}
                        initialParams={{
                            locations: "restaurant"
                        }}
                    />

                    <Stack.Screen
                        name='ServicesInformation'
                        component={ServicesInformation}
                        options={{ headerTitle: 'Services Information'}}
                    />

                    <Stack.Screen
                        name='Connect Windows'
                        component={ConnectPrinterWindowsContainer}
                        options={{ headerTitle: false }}
                    />

                    <Stack.Screen
                        name='Connect Mac'
                        component={ConnectPrinterMacContainer}
                        options={{ headerTitle: false }}
                    />

                    <Stack.Screen
                        name='Event One'
                        component={EventOneContainer}
                        options={{ headerTitle: false }}
                    />

                    <Stack.Screen
                        name='Event Two'
                        component={EventTwoContainer}
                        options={{ headerTitle: false }}
                    />

                    <Stack.Screen
                        name ='Lost Found'
                        component={LostFoundContainer}
                        options = {{ headerTitle: false }}
                    />

                    <Stack.Screen
                        name='Found Item Filter'
                        component={FoundItemFilterContainer}
                        options={{ headerTitle: false }}
                    />

                    <Stack.Screen
                        name='Lost Item Filter'
                        component={LostItemFilterContainer}
                        options={{ headerTitle: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});