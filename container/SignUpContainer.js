import React from 'react';
import { KeyboardAvoidingView, Image, TextInput, Text, StyleSheet, secureTextEntry, Alert } from 'react-native';
import SignUpButton from '../component/SignUpButton';
import firebaseDb from '../firebaseDb';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, signup } from '../actions/user';

class SignUpContainer extends React.Component {

    handleCreateUser = () => {
        this.props.signup()
        this.props.navigation.navigate('Main Menu')
    }

     render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={(Platform.OS === 'ios')? "padding" : null}
            >
                <Image
                    style={styles.image}
                    source={require('../assets/in.png')}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={ email => this.props.updateEmail(email) }
                    value={ this.props.user.email }
                    autoCapitalize='none'
                />

                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    placeholder="Password"
                    onChangeText={ password => this.props.updatePassword(password) }
                    value={ this.props.user.password }
                    autoCapitalize='none'
                />

                <SignUpButton
                    style={styles.button}
                    onPress={() => {
                        this.handleCreateUser();
                        Alert.alert('Sign Up Successful!');
                        }
                    }>
                    Sign Up
                </SignUpButton>

                {
                    (<Text style={styles.warningText}> Please enter all fields. </Text>)
                }
            </KeyboardAvoidingView>
        )
     }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#edd5c0'
    },
    image: {
        marginBottom: 50,
        backgroundColor: '#edd5c0'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 20,
        marginBottom: 8,
        width: 200,
        height: 30
    },
    button: {
        marginTop: 42,
    },
    text: {
        fontSize: 20,
        color: 'green',
        marginTop: 40
    },
    warningText: {
        fontSize: 15,
        color: 'red',
        marginTop: 20
    }
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, signup }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpContainer)