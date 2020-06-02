import React from 'react';
import { SafeAreaView, Image, StyleSheet, Dimensions, View, Text, Button } from 'react-native';
import GPSMapButton from '../component/GPSMapButton';
import LostFoundButton from '../component/LostFoundButton';
import ServicesInfoButton from '../component/ServicesInfoButton';
import FAQButton from '../component/FAQButton';
import { connect } from 'react-redux';
import firebaseDb from '../firebaseDb'

class MainMenuContainer extends React.Component {

    handleSignOut = () => {
        firebaseDb.auth().signOut()
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.profileContainer}>
                    <Text style={styles.profileText}>
                        Email: {this.props.user.email}
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
                        onPress={() => {this.props.navigation.navigate('Map')}}>
                    </GPSMapButton>

                    <LostFoundButton
                        style={styles.button}
                        onPress={() => {}}>
                    </LostFoundButton>

                    <ServicesInfoButton
                        style={styles.button}
                        onPress={() => {}}>
                    </ServicesInfoButton>

                    <FAQButton
                        style={styles.button}
                        onPress={() => {}}>
                    </FAQButton>

                </SafeAreaView>

                <View style={styles.eventsContainer}>

                </View>

                <View style={styles.eventsContainer}>

                </View>

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
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#b9d6eb',
    },
    eventsContainer: {
        height: windowHeight / 8,
        width: windowWidth / 6 * 5,
        borderRadius: 20,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: windowHeight / 40,
        backgroundColor: '#edd5c0'
    },
    profileImage: {
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },
    profileText: {
        textAlign: 'right'
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
    }
})

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(MainMenuContainer)