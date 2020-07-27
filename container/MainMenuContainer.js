import React from 'react';
import { SafeAreaView, Image, StyleSheet, Dimensions, View, Text, Button, TouchableOpacity } from 'react-native';
import { StackActions } from '@react-navigation/native';
import GPSMapButton from '../component/GPSMapButton';
import LostFoundButton from '../component/LostFoundButton';
import ServicesInfoButton from '../component/ServicesInfoButton';
import FixesButton from '../component/FixesButton';
import EventOneButton from '../component/EventOneButton';
import EventTwoButton from '../component/EventTwoButton';

import { connect } from 'react-redux';
import firebaseDb from '../firebaseDb'

class MainMenuContainer extends React.Component {

    state = {
        email: this.props.user.email,
        avatar: this.props.user.avatar
    }

    handleSignOut = () => {
        firebaseDb.auth().signOut()
        this.props.navigation.dispatch(StackActions.popToTop());
    }

    render() {
        const { avatar, users, email } = this.state

        return (
            <SafeAreaView style={styles.container}>
                <View style = {styles.logoutContainer}>
                    <TouchableOpacity
                        style = {styles.logout}
                        onPress= {this.handleSignOut}
                    >
                        <Text style = {styles.logoutText}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.profileContainer}>
                    <Image
                        style={styles.avatar}
                        source= {{ uri: this.state.avatar }}
                    />

                    <Text style={styles.profileText}>
                        Name: { this.props.user.name } {"\n"}
                        Email: { this.props.user.email }
                    </Text>

                </View>

                <SafeAreaView style={styles.buttonsContainer}>

                    <GPSMapButton
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('Map Dashboard')}}>
                    </GPSMapButton>

                    <LostFoundButton
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('Lost Found', {
                                email: this.props.user.email
                            })
                        }}>
                    </LostFoundButton>

                    <ServicesInfoButton
                        style={styles.button}
                        onPress={() => {this.props.navigation.navigate('ServicesInformation')}}>
                    </ServicesInfoButton>

                    <FixesButton
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('Fixes', {
                                email: this.state.email
                            })
                        }}>
                    </FixesButton>
                </SafeAreaView>

                <SafeAreaView style={styles.textContainer}>
                    <Text style = {styles.text}> Latest Event/Updates: </Text>
                </SafeAreaView>

                <EventOneButton
                    style={styles.eventsContainer}
                    onPress = {() => {this.props.navigation.navigate('Event One')}}
                />

                <EventTwoButton
                    style={styles.eventsContainer}
                    onPress = {() => {this.props.navigation.navigate('Event Two')}}
                />
            </SafeAreaView>
        )
    }
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileContainer: {
        height: windowHeight / 8,
        width: windowWidth / 6 * 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#b9d6eb',
        borderRadius: 20,
    },
    buttonsContainer: {
        height: windowHeight / 8 * 3,
        width: windowWidth / 6 * 5,
        borderRadius: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#b9d6eb',
        marginBottom: windowHeight / 40
    },
    logoutContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: windowWidth - 20,
        height: windowHeight / 15,
        marginBottom: 15
    },
    textContainer: {
        width: windowWidth / 6 * 5,
        height: windowHeight / 40,
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    eventsContainer: {
        borderRadius: 20,
        marginVertical: windowHeight / 80,
        backgroundColor: '#edd5c0',
    },
    profileImage: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    profileText: {
        textAlign: 'left',
        flexWrap: 'wrap',
    },
    button: {
        height: windowHeight / 7,
        width: windowWidth / 4,
        borderRadius: 15,
        backgroundColor: '#edd5c0',
        marginHorizontal: 30,
        marginVertical: 15,
        paddingVertical: 5
    },
    events: {
        marginTop: 70,
        marginBottom: 30
    },
    text: {
        fontSize: 14,
        textAlign: 'left'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    logout: {
        width: 60,
        height: 15,
        borderRadius: 10,
        marginRight: 10,
    },
    logoutText: {
        textAlign: 'center',
        color: 'orange',
        fontSize: 14
    }
})

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(MainMenuContainer)