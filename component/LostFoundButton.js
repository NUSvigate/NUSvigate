import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const LostFoundButton = props => (
    <TouchableOpacity style={[styles.container,props.style]}
                      onPress={props.onPress}
    >
        <Image
            style={styles.image}
            source={require('../assets/Main2.png')}
        />

        <Text style={styles.text}>
            Lost & Found
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        textAlign: 'center',
        fontSize: 12
    }
})

export default LostFoundButton;