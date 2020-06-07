import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ConnectPrinterWindowsContainer extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.header}>
                    To connect network printers in Mac and PC Commons from a Windows computer:
                </Text>
                <Text style = {styles.text}>
                    1. Connect to the NUS network {'\n'}
                    2. Click “Start” {'\n'}
                    3. Windows 7 and 8: Enter command in the “Start Search” bar in start menu {'\n'}
                    4. Type in \\nus-printserver and press “Enter” {'\n'}
                    5. A pop-up window will appear asking for your NUSNET Username and password.
                    (E.g. nusstu\username) {'\n'}
                    6. Double click on desired printer in the printer list:
                </Text>

                <Text style={styles.underlineText}>
                    MONO-A4 (A4 B/W) (Default: Double-Sided) {'\n'}
                    MONO-A3 (A3 B/W) (Default: Double-Sided) {'\n'}
                    COLOR-A4 (A4 Color) (Default: Double-Sided) {'\n'}
                    COLOR-A3 (A3 Color) (Default: Double-Sided) {'\n'}
                </Text>

                <Text style={styles.boldText}>
                    Remarks:
                </Text>

                <Text style={styles.text}>
                    Ensure settings are correct{'\n'}
                    Printer > Properties > under General, Preferences > Finishing tab >
                    Select/Deselect “Print on both sides” {'\n'} {'\n'}
                    Proceed to the Print Release Station (near the printers).
                    Follow the instructions on the screen.
                    Collect your printout at the printer(s).
                    For Printing Assistance, please call 6773-6322.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left',
        marginHorizontal: 20,
        marginVertical: 10
    },
    text: {
        textAlign: 'justify',
        marginHorizontal: 20,
        fontSize: 14,
    },
    underlineText: {
        textAlign: 'justify',
        fontSize: 14,
        textDecorationLine: 'underline',
        marginLeft: 36
    },
    boldText: {
        textAlign: 'justify',
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 20
    }
})