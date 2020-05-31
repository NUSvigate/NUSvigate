import React from 'react';
import { KeyboardAvoidingView, Image, TextInput, Text, StyleSheet, secureTextEntry, Alert } from 'react-native';
import SignUpButton from '../component/SignUpButton';
import firebaseDb from '../firebaseDb';

class SignUpContainer extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    signUpSuccess: false
  }

  handleUpdateName = name => this.setState({name})

  handleUpdateEmail = email => this.setState({email})

  handleUpdatePassword = password => this.setState({password})

  handleCreateUser = () => firebaseDb.firestore()
  .collection('users')
  .add({
    name: this.state.name,
    email: this.state.email,
    password: this.state.password,
  }).then(() => this.setState({
    name: '',
    email: '',
    password: '',
    signUpSuccess: true
  })).catch(err => console.error(err))

  render() {
      const {name, email, password, signUpSuccess} = this.state;

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
              secureTextEntry
                  style={styles.textInput}
                  placeholder="Password"
                  onChangeText={this.handleUpdatePassword}
                  value={password}
              />

              <SignUpButton
                  style={styles.button}
                  onPress={() => {
                      if (name.length && email.length && password.length) {
                          this.handleCreateUser();
                          Alert.alert('Sign Up Successful!');
                          this.props.navigation.navigate('Main Menu');
                      }
                  }}>
                  Sign Up
              </SignUpButton>

              {
                  signUpSuccess ? null :
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

export default SignUpContainer