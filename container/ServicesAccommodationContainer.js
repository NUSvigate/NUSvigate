import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, Image, Dimensions, Alert, ScrollView } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

export default class ServicesAccommodationContainer extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>

                <Image
                    style={styles.image}
                    source={require('../assets/header.png')}
                />

                <Hyperlink
                    linkStyle={ {color: '#2980b9'} }
                    linkDefault
                >
                    <Text style={styles.header}>
                    For undergraduate students! {'\n'}
                    </Text>

                    <Text style={styles.text}>
                    To check whether you are eligible to apply for NUS accommodation and the
                    prevailing selection criteria, please click on the link below. {'\n'}
                    http://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/application-guide
                    {'\n'}

                    {'\n'}
                    To find out the hostel options available on campus, please check out the link below. {'\n'}
                    http://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/hostel-options
                    {'\n'}

                    {'\n'}
                    To find out about hostel charges and the financial aid available, please visit the links below. {'\n'}
                    Hostel Charges: http://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/hostel-meal-plan-rates
                    {'\n'}
                    Financial Aid: http://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/financial-aid
                    {'\n'}

                    {'\n'}
                    Before applying for accommodations within NUS, please check out the following link for
                    the Terms and Conditions of the hostel application exercise.
                    http://nus.edu.sg/osa/student-services/hostel-admission/undergraduate/terms-and-conditions
                    {'\n'}

                    {'\n'}
                    For clarifications, please contact the respective staff in the Halls of Residence / Student Residences /
                    Residential Colleges whose contacts are available in the websites above. {'\n'}
                    </Text>
                </Hyperlink>
            </ScrollView>
        )
    }
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#edd5c0',
    },
    header: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 20
    },
    text: {
        textAlign: 'justify',
        marginHorizontal: 20,
        fontSize: 14
    },
    image: {
        height: windowHeight / 15,
        width: windowWidth / 3,
        marginLeft: 10,
        marginTop: 10
    }
})