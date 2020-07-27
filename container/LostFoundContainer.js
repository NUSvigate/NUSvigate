import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions} from 'react-native';

import LostItemButton from '../component/LostItemButton';
import FoundItemButton from '../component/FoundItemButton';

export default class LostFoundContainer extends Component {

    state = { email: this.props.route.params.email }

    render() {

        return (
            <View style = {styles.container}>
                <FoundItemButton
                    style={styles.button}
                    onPress = {() => {
                        this.props.navigation.navigate("Found Item Filter", {
                            email: this.state.email
                        });
                    }}
                />

                <LostItemButton
                    style={styles.button}
                    onPress = {() => {
                        this.props.navigation.navigate("Lost Item Filter");
                    }}
                />
            </View>
        )
    }
}

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b9d6eb',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: '#b9d6eb',
        justifyContent: 'center'
    },
})