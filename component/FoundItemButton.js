import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const FoundItemButton = props => (
    <TouchableOpacity
        style={[styles.container, props.style]}
        onPress={props.onPress}
        color= "#b9d6eb"
    >
        <Image
            source = { require("../assets/foundItem.png")}
            style = { styles.image }
        />

        <Text style={styles.text}> Found and Item </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b9d6eb'
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 10,
        paddingVertical: 10,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    image: {
        backgroundColor: '#b9d6eb'
    }
})

export default FoundItemButton;