import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ConnectPrinterMacContainer extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style={styles.header}>
                    To connect network printers in Mac and PC Commons from a Macintosh computer:
                </Text>

                <Text style = {styles.text}>
                    1) Go Finder > System Preferences. {'\n'}
                    2) Select “Print & Fax”. {'\n'}
                    3) Click on the “+” sign on the left. {'\n'}
                    4) Click on the “IP” Printer. {'\n'}
                    5) The “Add Printer” screen appears.  Type the following:
                </Text>

                <Text style={styles.list}>
                    Protocol: Line Printer Daemon-LPD {'\n'}
                    Address: nus-printserver.stf.nus.edu.sg {'\n'}
                    Queue: MONO-A4 {'\n'}
                    Name: BW-A4 {'\n'}
                    Location: Mac Commons / Thinklab {'\n'}
                    Print Using: Choose (Generic PostScript printer) {'\n'}
                </Text>

                <Text style={styles.text}>
                    6) Click “Add” and then select “Duplex Printing Unit”. Use Your “Computer Name or Login Name” to Release Your Print Job
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
    list: {
        textAlign: 'justify',
        fontSize: 14,
        marginLeft: 36
    },
    boldText: {
        textAlign: 'justify',
        fontSize: 14,
        fontWeight: 'bold',
        marginHorizontal: 20
    }
})