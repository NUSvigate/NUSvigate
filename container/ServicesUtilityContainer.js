import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, ScrollView } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import ConnectPrinterWindowsButton from '../component/ConnectPrinterWindowsButton';
import ConnectPrinterMacButton from '../component/ConnectPrinterMacButton';

export default class ServicesUtilityContainer extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>

                <Image
                    style={styles.image}
                    source={require('../assets/header.png')}
                />

                <Text style={styles.header}>
                    Printing and Photocopying
                </Text>

                <Text style={styles.subHeader}>
                    NUS Libraries with scanning and faxing services:
                </Text>

                <Text style={styles.text}>
                    Scanning services are available at the photocopy room of the following libraries:
                </Text>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bullet}> {'\u2022' + " "} </Text>
                    <Text style={styles.bulletText}> Central Library </Text>
                </View>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bullet}> {'\u2022' + " "} </Text>
                    <Text style={styles.bulletText}> Faculty of Science Library </Text>
                </View>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bullet}> {'\u2022' + " "} </Text>
                    <Text style={styles.bulletText}> Hon Sui Sen Memorial Library </Text>
                </View>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bullet}> {'\u2022' + " "} </Text>
                    <Text style={styles.bulletText}> Medicine Library </Text>
                </View>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bullet}> {'\u2022' + " "} </Text>
                    <Text style={styles.bulletText}> C J Koh Law Library </Text>
                </View>

                <Text style={styles.text}>
                    Scanning services are free, but thumb drives will not be provided to save the
                    scanned files (emailing of files is not allowed). {'\n'}
                    Please observe the Copyright Act when scanning. {'\n'} {'\n'}
                    Scanning services are also available at the following locations:
                </Text>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bullet}> {'\u2022' + " "} </Text>
                    <Text style={styles.bulletText}> CBLC at Yusof Ishak, level 3 </Text>
                </View>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bullet}> {'\u2022' + " "} </Text>
                    <Text style={styles.bulletText}> Science CBLC at S10 </Text>
                </View>

                <View style={styles.bulletContainer}>
                    <Text style={styles.bullet}> {'\u2022' + " "} </Text>
                    <Text style={styles.bulletText}> Education Resource Centre and PC Commons at UTown </Text>
                </View>

                <Text style={styles.text}>
                    The facilities are available only for those who have NUSNET id and password,
                    i.e. NUS student and staff.
                </Text>

                <Text style={styles.header}>
                    {'\n'}
                    Printing Services in U-Town
                </Text>

                <Text style={styles.subHeader}>
                    Where are the printing services located in U-Town?
                </Text>

                <Text style={styles.text}>
                    The printers are available at both PC and MAC Commons, located in Education
                    Resource Centre (ERC). {'\n'}
                </Text>

                <Text style={styles.subHeader}>
                    How do I connect to the network printers in Mac and PC Commons from a
                    Windows computer?
                </Text>

                <ConnectPrinterWindowsButton
                    onPress = {() => this.props.navigation.navigate('Connect Windows')}
                />

                <Text style={styles.subHeader}>
                    {'\n'}
                    How do I connect to the network printers in Mac and PC Commons from a
                    Macintosh computer?
                </Text>

                <ConnectPrinterMacButton
                    onPress = {() => this.props.navigation.navigate('Connect Mac')}
                />

                <Text style = {styles.subHeader}>
                    {'\n'}
                    If I have encountered printing issues at the printing room, whom do I contact for assistance?
                </Text>

                <Text style={styles.text}>
                    Please call 6773-6322 for further assistance. {'\n'}
                </Text>

                <Text style={styles.operatingHoursHeader}>
                    Operating Hours for the hotline:
                </Text>

                <Text style={styles.operatingHoursText}>
                    Weekdays – 9am to 5.30pm {'\n'}
                    Saturday – 9am to 1pm {'\n'}
                    Sunday and Public holiday: Not available
                </Text>

                <Text style={styles.subHeader}>
                    {'\n'}
                    Is scanning service available at UTown?
                </Text>

                <Text style={styles.text}>
                    There are 2 scanners available in PC Commons for use with your laptops. {'\n'}
                </Text>

                <Text style={styles.subHeader}>
                    Will there be a refill if the printers have ran out of paper?
                </Text>

                <Text style={styles.text}>
                    The printers will be refilled with paper at the start of the day.
                    If the paper has not yet been refilled and you need your print-out urgently,
                    you could visit the other Print Release Station from the other Commons. {'\n'}
                </Text>

                <Text style={styles.subHeader}>
                    How can I top up my EZ-link card if there is insufficient value to release my
                    print-outs?
                </Text>

                <Text style={styles.text}>
                    Please approach any ATM Machines within the campus / MRT EZ-Link Top Up Kiosk
                    / AXS machine to top up the EZ-Link Card Value. {'\n'}
                </Text>

                <Text style={styles.subHeader}>
                    Will there be any printed receipts for the print jobs?
                </Text>

                <Text style={styles.text}>
                    No receipt will be given for the print jobs. {'\n'}
                </Text>

                <Text style={styles.subHeader}>
                    Is Photo-Printing service available at U-Town?
                </Text>

                <Text style={styles.text}>
                    There is no Photo-Printing service at U-Town. {'\n'}
                </Text>

                <Text style={styles.subHeader}>
                    Is Fax service available at U-Town?
                </Text>

                <Text style={styles.text}>
                    There is no Fax service at U-Town. {'\n'}
                </Text>

                <Text style={styles.subHeader}>
                    Where to find A3 Size and Color printouts after submitting for printing?
                </Text>

                <Text style={styles.text}>
                    There is color printing available at the PC Commons (UTown) and ThinkLab
                    (Level 3 Computer Centre). {'\n'}
                </Text>

                <Text style={styles.subHeader}>
                    What are the photocopying and printing rates? {'\n'}
                </Text>

                <Text style={styles.operatingHoursHeader}>
                    Photocopying
                </Text>

                <Text style={styles.operatingHoursText}>
                    A4 B/W ---- 3¢/page {'\n'}
                    A4 Color ---- 50¢/page {'\n'}
                    A3 B/W ---- 6¢/page {'\n'}
                    A3 Color --- 80¢/page {'\n'}
                </Text>

                <Text style={styles.operatingHoursHeader}>
                    Network Printing
                </Text>

                <Text style={styles.operatingHoursText}>
                    A4 B/W ---- 4¢/page {'\n'}
                    A4 Color ---- 40¢/page {'\n'}
                    A3 B/W ---- 8¢/page {'\n'}
                    A3 Color --- 80¢/page {'\n'}
                </Text>

                <Text style={styles.operatingHoursHeader}>
                    Microfilm Printing
                </Text>

                <Text style={styles.operatingHoursText}>
                    A4 B/W ---- 40¢/page {'\n'}
                    A3 B/W ---- 70¢/page {'\n'}
                </Text>

                <Text style={styles.remarksText}>
                    For more details of printing services
                    (e.g. printing of microfilm) or problems with photocopiers (eg paper jams),
                    please contact the vendors at: {'\n'} {'\n'}
                    67736398 - Central Library {'\n'}
                    67770419 - Hon Sui Sen Memorial Library {'\n'}
                    62197732 - C J Koh Law Library {'\n'} {'\n'}
                    Binding services for thesis, final year projects are also provided by the vendor in the library. {'\n'}
                </Text>
            </ScrollView>
        )
    }
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edd5c0'
    },
    bulletContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    image: {
        height: windowHeight / 15,
        width: windowWidth / 3,
        marginLeft: 10,
        marginTop: 10
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginHorizontal: 20,
        marginVertical: 10,
        textDecorationLine: 'underline'
    },
    subHeader: {
        textAlign: 'justify',
        marginHorizontal: 20,
        fontSize: 14,
        fontWeight: 'bold'
    },
    text: {
        textAlign: 'justify',
        marginHorizontal: 20,
        fontSize: 13,
        marginTop: 5
    },
    bullet: {
        marginLeft: 20,
        marginTop: 1,
        width: 15
    },
    bulletText: {
        marginTop: 1,
        textAlign: 'justify',
        fontSize: 13
    },
    operatingHoursHeader: {
        fontSize: 13,
        textDecorationLine: 'underline',
        marginHorizontal: 20,
        textAlign: 'justify'
    },
    operatingHoursText: {
        fontSize: 13,
        marginHorizontal: 20,
        textAlign: 'justify'
    },
    remarksText: {
        fontSize: 14,
        marginHorizontal: 20,
        textAlign: 'justify'
    }
})
