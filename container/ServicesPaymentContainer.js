import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, FlatList, Dimensions, Alert } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

export default class ServicesPaymentContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require('../assets/header.png')}
                />

                <Hyperlink
                    linkStyle={ {color: '#2980b9'} }
                    linkDefault
                >
                    <Text style={styles.header}>
                        How do I pay for my fees?
                    </Text>

                    <Text style={styles.text}>
                        Please refer to the Office of Finance website at {'\n'}
                        http://www.nus.edu.sg/finance/students/student-finance-matters.html
                        for the information. {'\n'}
                    </Text>

                    <Text style={styles.header}>
                        When do I pay for my fees?
                    </Text>

                    <Text style={styles.text}>
                        Please refer to the Office of Finance Payment Schedule at {'\n'}
                        http://www.nus.edu.sg/finance/students/student-finance-matters.html
                        for details on the payment schedule. {'\n'} {'\n'}
                        Email reminders will also be sent to all students from time to time. {'\n'}
                    </Text>

                    <Text style={styles.header}>
                        What should I do if I have made two payments for the same bill to NUS?
                    </Text>

                    <Text style={styles.text}>
                        Any excess payment over and above the prevailing fees outstanding will
                        remain as a credit balance in the student account with NUS.
                        This will be used to offset fees payable in the next semester.  {'\n'} {'\n'}
                        Students who wish to get a refund for the excess payment made are required
                        to write to the Students Finance Section of the Office of Financial
                        Services at ofnbox3@nus.edu.sg. {'\n'}
                    </Text>

                    <Text style={styles.header}>
                        My scholarship has been terminated and I am unable to afford the fees, are
                        there any help available?
                    </Text>

                    <Text style={styles.text}>
                        Please refer to the Financial Aid tab under Services Information to find out more. {'\n'}
                    </Text>
                </Hyperlink>
            </View>
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
        marginVertical: 10
    },
    text: {
        textAlign: 'justify',
        marginHorizontal: 20,
        fontSize: 14
    }
})