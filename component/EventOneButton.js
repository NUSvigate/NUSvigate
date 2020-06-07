import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, Dimensions, View } from 'react-native';

const EventOneButton = props => (
    <TouchableOpacity
        style={[styles.container,props.style]}
        onPress={props.onPress}
    >
        <View style={styles.textContainer}>
            <Text style={styles.text}>
                Free Python Course for Beginners
            </Text>
        </View>

        <View style={styles.imageContainer}>
            <Image
                source={require('../assets/Main5.png')}
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
        },
        textContainer: {
            height: windowHeight / 8,
            width: windowWidth / 6 * 4,
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageContainer: {
            height: windowHeight / 8,
            width: windowWidth / 6,
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 'bold',
        }
})

export default EventOneButton;