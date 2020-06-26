import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const FixesButton = props => (
    <TouchableOpacity style={[styles.container,props.style]}
                      onPress={props.onPress}
    >
        <Image
            style={styles.image}
            source={require('../assets/Main4.png')}
        />

        <Text style={styles.text}>
            Fixes
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text: {
        textAlign: 'center',
        fontSize: 12
    }
})

export default FixesButton;