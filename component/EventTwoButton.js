import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, Dimensions, View } from 'react-native';

const EventTwoButton = props => (
    <TouchableOpacity
        style={[styles.container,props.style]}
        onPress={props.onPress}
    >
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                Hiring Student Helpers for Orientation
            </Text>
        </View>

        <View style={styles.imageContainer}>
            <Image
                source={require('../assets/Main6.png')}
            />
        </View>
    </TouchableOpacity>
)

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        height: windowHeight / 8,
        width: windowWidth / 6 * 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        height: windowHeight / 8,
        width: windowWidth / 6 * 4,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        height: windowHeight / 8,
        width: windowWidth / 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
    }
})

export default EventTwoButton;