import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native';

const LostItemButton = props => (
    <TouchableOpacity
        style={[styles.container, props.style]}
        onPress={props.onPress}
        color = '#b9d6eb'
    >
        <Image
            style = { styles.image }
            source = { require("../assets/lostItem.png") }
        />

        <Text style = { styles.text}> Lost an Item </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b9d6eb'
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 10,
        borderRadius: 5,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    image: {
        backgroundColor: '#b9d6eb'
    }
})

export default LostItemButton