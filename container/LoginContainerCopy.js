import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  LayoutAnimation,
  KeyboardAvoidingView
} from "react-native";
import * as firebase from "firebase";

export default class LoginContainer extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  handleLogin = () => {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    LayoutAnimation.easeInEaseOut();

    const { errorMessage } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Image
          source={require("../assets/in.png")}
          style={{ marginTop: -25, alignItems: 'center'}}
        />
        <Image
          source={require("../assets/login.png")}
          style={{ marginTop: -35, alignSelf: "center" }}
        />

        <Text style={styles.greeting}> Welcome back. </Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}> { this.state.errorMessage } </Text>
          )}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={{ color: "#000000", fontSize: 14 }}>
              Email Address
            </Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 32 }}>
            <Text style={{ color: "#000000", fontSize: 14 }}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "600" }}>
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => this.props.navigation.navigate("Sign Up")}
        >
          <Text style={{ color: "#414959", fontSize: 14 }}>
            New to NUSvigate?{" "}
            <Text style={{ fontWeight: "500", color: "#ff8c00" }}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  form: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 35,
    backgroundColor: "#ff8c00",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  errorMessage: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
});
