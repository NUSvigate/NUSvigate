import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const ServicesInfoButton = props => (
    <TouchableOpacity style={[styles.container,props.style]}
                      onPress={props.onPress}
    >
        <Image
            style={styles.image}
            source={require('../assets/Main3.png')}
        />

        <Text style={styles.text}>
            Services {"\n"}
            Information
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        textAlign: 'center',
        fontSize: 12
    }
})

export default ServicesInfoButton;