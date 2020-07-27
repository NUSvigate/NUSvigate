import React from 'react';
import {
    Alert,
    Image,
    TextInput,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    ActivityIndicator,
    StatusBar,
    LayoutAnimation,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions
    } from 'react-native';
import firebaseDb from '../firebaseDb';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateName, login, getUser } from '../actions/user'

class LoginContainer extends React.Component {

    componentDidMount = () => {
        firebaseDb.auth().onAuthStateChanged(user => {
            if (user && user.emailVerified === true) {
                this.props.getUser(user.uid)
                if (this.props.user !== null) {
                    this.props.navigation.navigate('Main Menu')
                }
            }
        })
    }

    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.container}
            >
                <StatusBar barStyle="light-content"/>
                <Image
                    source={require("../assets/in.png")}
                    style={{ marginTop: -25, alignItems: 'center'}}
                />

                <Text style={styles.greeting}> Welcome back. </Text>
                <View style={styles.form}>
                    <Text style={{ color: "#000000", fontSize: 14 }}>
                        Email Address
                    </Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={ email => this.props.updateEmail(email) }
                        value={ this.props.user.email }
                    />

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: "#000000", fontSize: 14 }}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={ password => this.props.updatePassword(password) }
                            value={ this.props.user.password }
                        />
                    </View>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={ this.props.login }
                    >
                        <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "600" }}>
                            Sign in
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ alignSelf: "center", marginTop: 32 }}
                        onPress={() => {
                            this.props.navigation.navigate("Sign Up")
                        }}
                    >
                        <Text style={{ color: "#414959", fontSize: 14 }}>
                            New to NUSvigate?{" "}
                            <Text style={{ fontWeight: "500", color: "#ff8c00" }}>Sign up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    greeting: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
        marginBottom: 50
    },
    form: {
        marginBottom: 10,
        marginHorizontal: 10,
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        marginTop: 10,
        width: width - 50
    },
    button: {
        marginHorizontal: 35,
        backgroundColor: "#ff8c00",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    image: {
        marginBottom: 50,
        backgroundColor: '#edd5c0'
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