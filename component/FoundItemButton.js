import React, { Component } from 'react';
import { StyleSheet, Button } from 'react-native';

const FoundItemButton = props => (
    <Button style={[styles.container, props.style]}
            title='Found an Item'
            onPress={props.onPress}
    />
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    text: {
        fontSize: 15,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 5,
        color: 'black',
        textAlign: 'center'
    }
})

export default FoundItemButton;