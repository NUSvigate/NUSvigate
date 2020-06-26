import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import LoginButton from '../component/LoginButton';
import CreateAccountButton from '../component/CreateAccountButton';

class HomeScreenContainer extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.upperImage}
                        source={require('../assets/in.png')}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Image
                        style={styles.lowerImage}
                        source={require('../assets/signin.png')}
                    />

                    <LoginButton
                        style={styles.loginButton}
                        onPress={() => this.props.navigation.navigate('Login')}
                    />

                    <CreateAccountButton
                        style={styles.createAccountButton}
                        onPress={ () => this.props.navigation.navigate('Sign Up') }
                    />
                </View>
            </View>
        )
    }
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#edd5c0',
        flex: 1
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#edd5c0',
        marginVertical: 10
    },
    upperImage: {
        backgroundColor: '#b9d6eb'
    },
    lowerImage: {
        marginTop: windowHeight / 70,
        marginBottom: 50
    },
    loginButton: {
        marginVertical: 20,
        paddingBottom: 50,
    },
    createAccountButton: {
        marginVertical: 50
    }
})

export default HomeScreenContainer