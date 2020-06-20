import React from 'react';
import { SafeAreaView, Image, StyleSheet, Dimensions, View, Text, Button } from 'react-native';
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

    handleSignOut = () => {
        firebaseDb.auth().signOut()
        this.props.navigation.dispatch(StackActions.popToTop());
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.profileContainer}>
                    <Text style={styles.profileText}>
                        Name: { this.props.user.name } {"\n"}
                        Email: { this.props.user.email }
                    </Text>

                    <Image
                        style={styles.profileImage}
                        source={require('../assets/Main.png')}
                    />

                    <Button title='Logout' onPress={this.handleSignOut} />

                </View>

                <SafeAreaView style={styles.buttonsContainer}>

                    <GPSMapButton
                        style={styles.button}
                        onPress={() => {this.props.navigation.navigate('Map Dashboard')}}>
                    </GPSMapButton>

                    <LostFoundButton
                        style={styles.button}
                        onPress={() => {}}>
                    </LostFoundButton>

                    <ServicesInfoButton
                        style={styles.button}
                        onPress={() => {this.props.navigation.navigate('ServicesInformation')}}>
                    </ServicesInfoButton>

                    <FixesButton
                        style={styles.button}
                        onPress={() => {}}>
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#b9d6eb',
        borderRadius: 20
    },
    buttonsContainer: {
        height: windowHeight / 8 * 3,
        width: windowWidth / 6 * 5,
        borderRadius: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#b9d6eb',
        marginBottom: windowHeight / 40
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
        justifyContent: 'flex-end'

    },
    profileText: {
        textAlign: 'right',
        flexWrap: 'wrap'
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
    }
})

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(MainMenuContainer)