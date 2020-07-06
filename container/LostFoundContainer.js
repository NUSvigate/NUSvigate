import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import LostItemButton from '../component/LostItemButton';
import FoundItemButton from '../component/FoundItemButton';

export default class LostFoundContainer extends Component {

    render() {

        const email = this.props.route.params.email;
        return (
            <View style = {styles.container}>
                <FoundItemButton
                    style={styles.button}
                    onPress = {() => {
                        this.props.navigation.navigate("Found Item Filter", {
                            email: email
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b9d6eb',
        justifyContent: 'center',
    },
    button: {
        height: windowHeight / 7,
        width: windowWidth / 4,
        borderRadius: 15,
        backgroundColor: '#edd5c0',
        marginHorizontal: 30,
        marginVertical: 15,
        paddingVertical: 5,
        backgroundColor: 'black'
    }
})