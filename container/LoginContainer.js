import React from 'react';
import { Image, TextInput, Text, StyleSheet, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import LoginButton from '../component/LoginButton';
import firebaseDb from '../firebaseDb';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login, getUser } from '../actions/user'

class LoginContainer extends React.Component {

    componentDidMount = () => {
        firebaseDb.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.getUser(user.uid)
                if (this.props.user !== null) {
                    this.prop.navigation.navigate('Main Menu')
                }
            }
        })
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={(Platform.OS === 'ios')? "padding" : null}
                style={styles.container}>
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

                <LoginButton
                    style={styles.loginButton}
                    onPress= {() => {
                        this.props.login();
                    }}
                />

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
    loginButton: {
        marginVertical: 20,
        paddingBottom: 50
    },
    text: {
        fontSize: 20,
        color: 'green',
        marginTop: 40
    }
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer)