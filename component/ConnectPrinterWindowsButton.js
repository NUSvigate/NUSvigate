import React from 'react'
import { StyleSheet, Button } from 'react-native';

const ConnectPrinterWindowsButton = props => (
    <Button
        color= 'brown'
        title='Connect Windows Computer'
        onPress={props.onPress}
    />
)

export default ConnectPrinterWindowsButton;