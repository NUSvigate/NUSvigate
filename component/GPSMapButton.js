import React from 'react'
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';

const GPSMapButton = props => (
    <TouchableOpacity style={[styles.container,props.style]}
                      onPress={props.onPress}
    >
        <Image
            style={styles.image}
            source={require('../assets/Main1.png')}
        />

        <Text style={styles.buttonText}>
            GPS Campus {"\n"}
            Map
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 12
    }
})

export default GPSMapButton;