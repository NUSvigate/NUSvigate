import React from 'react';
import {
    KeyboardAvoidingView,
    TextInput,
    secureTextEntry,
    Alert,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    StatusBar,
    Dimensions
    } from 'react-native';
import SignUpButton from '../component/SignUpButton';
import firebaseDb from '../firebaseDb';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, updateName, updateAvatar, signup } from '../actions/user';
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

class SignUpContainer extends React.Component {

    state = {
        avatar: "https://firebasestorage.googleapis.com/v0/b/nusvigate-1fffe.appspot.com/o/user.png?alt=media&token=d4058d6a-d0a3-403e-9882-531a034647a5",
        accessToken: null
    }

    handleCreateUser = () => {
        this.uploadImage(this.state.avatar, this.props.user.email)
            .then(snapshot => {
                snapshot.ref.getDownloadURL().then(url => {
                    this.setState({ avatar: url })
                    console.log(this.state.avatar)
                })
                .then(this.props.updateAvatar(this.state.avatar))
                .then(this.props.signup())
            })
            .catch((error) => {
                Alert.alert("Error", error.message);
            });
    }

    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        const ref = firebaseDb.storage().ref().child("profile pics/" + imageName)
        return ref.put(blob);
    }

    handlePickAvatar = async () => {
        const { status } = await ImagePicker.getCameraRollPermissionsAsync();
        if (status !== 'granted') {
            response = await ImagePicker.requestCameraRollPermissionsAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
            });
        }

        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
            this.setState({ avatar: result.uri });
        }
    }

     render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior= "padding"
            >
                <StatusBar barStyle="light-content"/>
                <Image
                    source={require("../assets/in.png")}
                    style={{ marginTop: -25, alignItems: 'center' }}
                />

                <View style={styles.form}>
                    <TouchableOpacity
                        style={styles.avatarPlaceholder}
                        onPress={this.handlePickAvatar}
                    >
                        { this.state.avatar &&
                            <Image
                                source={{ uri: this.state.avatar }}
                                style={styles.avatar}
                            />
                        }

                        { !this.state.avatar &&
                            <Ionicons
                                name="ios-add"
                                size={45}
                                color="#000000"
                                style={{ marginTop: 6, marginLeft: 2 }}
                            />
                        }
                    </TouchableOpacity>
                    <Text style={styles.greeting}>{`Profile Picture`}</Text>

                    <View>
                        <Text style={{ color: "#000000", fontSize: 14 }}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={ name => this.props.updateName(name) }
                            value={ this.props.user.name }
                        />
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={{ color: "#000000", fontSize: 14 }}>
                            Email Address
                        </Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={ email => this.props.updateEmail(email) }
                            value={ this.props.user.email }
                        />
                    </View>

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

            <TouchableOpacity
                style={styles.button}
                onPress={this.handleCreateUser}
            >
                <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ alignSelf: "center", marginTop: 32 }}
                onPress={() => this.props.navigation.navigate("Login")}
            >

                <Text style={{ color: "#414959", fontSize: 13 }}>
                    Already have an account?{" "}
                    <Text style={{ fontWeight: "500", color: "#ff8c00" }}>Sign in</Text>
                </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        )
     }
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        marginBottom: 50,
        backgroundColor: '#edd5c0'
    },
    form: {
        marginBottom: 10,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        width: width - 50
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: "#dcdcdc",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    button: {
        marginHorizontal: 35,
        backgroundColor: "#ff8c00",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase",
    },
    greeting: {
        marginBottom: 20
    }
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, updateName, updateAvatar, signup }, dispatch)
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