import React , { Component } from 'react';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const SubmitFixesButton = props => (
    <Button
        style={[styles.container, props.style]}
        title='Submit'
        onPress={props.onPress}
    />
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingBottom: 20,
    }
})

export default SubmitFixesButton