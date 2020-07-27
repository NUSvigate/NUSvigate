import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, Dimensions, Button, Alert, TouchableOpacity, Image } from 'react-native';
import firebaseDb, { db } from '../firebaseDb';
import * as ImagePicker from 'expo-image-picker';
import { Dropdown } from 'react-native-material-dropdown';

import SubmitFixesButton from '../component/SubmitFixesButton';

export default class FixesContainer extends Component {

    state = {
        email: this.props.route.params.email,
        exactLocation: null,
        image_uri: null,
        locationSelectedValue: 1,
        description: null,
        accessToken: null
    }

    setLocationStateValue = (ddlValue) => {
        this.setState({
            locationSelectedValue: ddlValue
        });
    }

    updateExactLocation = (exactLocation) => {
        this.setState({
            exactLocation: exactLocation
        })
    }

    updateDescription = (description) => {
        this.setState({
            description: description
        })
    }

    async componentDidMount() {

        const { status } = await ImagePicker.getCameraRollPermissionsAsync();
        if (status !== 'granted') {
            response = await ImagePicker.requestCameraRollPermissionsAsync({
                allowsEditing: true
            });
        }
    }

    onChooseImagePress = async () => {
        const result = await ImagePicker.launchImageLibraryAsync();

        if (!result.cancelled) {
            this.setState({ image_uri: result.uri });
        }
    }

    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        const ref = firebaseDb.storage().ref().child("fixes/" + imageName)
        return ref.put(blob);
    }

    submitItem = async () => {
        this.uploadImage(this.state.image_uri, this.state.exactLocation)
        .then(snapshot => {
            snapshot.ref.getDownloadURL().then(url => {
                this.setState({ accessToken: url })
            })
            .then(this.updateDatabase)
        })
        .then(() => {
            Alert.alert("Success");
        })
        .catch((error) => {
            if (error.message = "Network request error") {
                Alert.alert("Please attach an image of the damaged property/facility!")
            } else {
                Alert.alert("Error", error.message);
            }
        });
    }

    updateDatabase = () => {
        const fix = {
            locationValue: this.state.locationSelectedValue,
            imageName: this.state.exactLocation,
            image_url: this.state.accessToken,
            email: this.state.email,
            description: this.state.description
        }

        db.collection('fixes')
            .doc(this.state.exactLocation)
            .set(fix)
    }

    render() {

        const {
            imageName,
            image_uri,
            locationSelectedValue,
            exactLocation,
            description,
            accessToken
         } = this.state;

        const location = [
            {
                label: 'Faculty of Science',
                value: 1
            }, {
                label: 'Medicine',
                value: 2
            }, {
                label: 'Yusof Ishak House',
                value: 3
            }, {
                label: 'Central Library',
                value: 4
            }, {
                label: 'Faculty of Arts and Social Science',
                value: 5
            }, {
                label: 'School of Computing',
                value: 6
            }, {
                label: 'Business School',
                value: 7
            }, {
                label: 'School of Design and Environment',
                value: 8
            }, {
                label: 'Faculty of Engineering',
                value: 9
            }, {
                label: 'University Town',
                value: 10
            }, {
                label: 'NUS Museum',
                value: 11
            }
        ]

        return (
            <View style={styles.container}>
                <Dropdown
                    containerStyle = {styles.dropdown}
                    data = {location}
                    value = {this.state.locationSelectedValue}
                    label = 'Location of damaged facility'
                    itemColor = 'blue'
                    useNativeDriver = {true}
                    onChangeText = {(value, data, index) => {
                        this.setLocationStateValue(value)
                    }}
                />

                <View style={styles.descriptionContainer}>
                    <Text> Exact location within faculty: </Text>

                    <TextInput
                        style={styles.location}
                        autoCorrect={true}
                        value={this.state.exactLocation}
                        onChangeText={ text => {
                            this.updateExactLocation(text)
                        }}
                    />

                    <Text> Description of damaged facility: </Text>

                    <TextInput
                        style={styles.description}
                        autoCorrect = {true}
                        multiline={true}
                        textAlignVertical='top'
                        onChangeText= { text => {
                            this.updateDescription(text)
                        }}
                    />

                    { this.state.image_uri &&
                        <Image
                            source = {{ uri: this.state.image_uri }}
                            style = {{ width: 300, height: 200, marginBottom: 10}}
                        />
                    }
                </View>

                <View style = {styles.imageContainer}>
                    <TouchableOpacity
                        onPress = {this.onChooseImagePress}
                        style = {{ marginBottom: 20}}
                    >
                        <Text> Choose Image </Text>
                    </TouchableOpacity>
                </View>

                <SubmitFixesButton
                    style={styles.button}
                    onPress={ this.submitItem }
                />
            </View>
        )
    }
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edd5c0',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    descriptionContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    imageContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    dropdown: {
        width: width / 1.2,
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 20
    },
    location: {
        height: 30,
        width: width / 1.2,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20
    },
    description: {
        height: height / 5,
        width: width / 1.2,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 20,
        textAlign: 'left'
    },
    textInput: {
        height: 30,
        width: width / 1.2,
        borderColor: 'black',
        borderWidth: 1,
    },
    button: {
        marginTop: 30
    }
})