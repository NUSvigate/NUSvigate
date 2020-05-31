import React from 'react';
import { Image, TextInput, Text, StyleSheet, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import LoginButton from '../component/LoginButton';
import firebaseDb from '../firebaseDb';

class LoginContainer extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        users: null,
        isLoading: true,
        loginSuccess: false
    }

    handleUpdateName = name => this.setState({name});

    handleUpdateEmail = email => this.setState({email});

    handleUpdatePassword = password => this.setState({password});

    componentDidMount() {
        firebaseDb.firestore().collection('users').get().then(querySnapshot => {
            const results = [];
            querySnapshot.docs.map(documentSnapshot => results.push({
            ...documentSnapshot.data(),
            name: documentSnapshot.name,
            email: documentSnapshot.email,
            password: documentSnapshot.password }))
            this.setState({isLoading: false, users: results})
            }).catch(err => console.error(err))
    }

    handleUpdateLoginSuccess = users => {
        for (i = 0; i < this.state.users.length; i++) {
            if (this.state.name === this.state.users[i].name
            && this.state.email === this.state.users[i].email
            && this.state.password === this.state.users[i].password) {
                this.setState({loginSuccess: true});
            }
        }
    }

    render() {
        const { name, email, password, users, isLoading, loginSuccess } = this.state;
        if (isLoading) return <ActivityIndicator/>

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
                    placeholder="Name"
                    onChangeText={this.handleUpdateName}
                    value={name}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    onChangeText={this.handleUpdateEmail}
                    value={email}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    onChangeText={this.handleUpdatePassword}
                    value={password}
                />

                <LoginButton
                    style={styles.loginButton}
                    onPress= {() => {
                        this.handleUpdateLoginSuccess();
                    }}
                />

                    { loginSuccess && (() => { this.props.navigation.navigate('Main Menu'); })}

                    { !loginSuccess && (<Text style={styles.text}> Login failed. Please check your details again.</Text>) }

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

export default LoginContainer