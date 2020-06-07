import React from 'react'
import { StyleSheet, Button } from 'react-native';

const ConnectPrinterMacButton = props => (
    <Button
        color= 'brown'
        title='Connect MacBook'
        onPress={props.onPress}
    />
)

export default ConnectPrinterMacButton;