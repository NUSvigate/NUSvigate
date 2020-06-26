import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

export default class EventOneContainer extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style={styles.textContainer}>
                    <Hyperlink>
                        <Text style = {styles.title}>
                            Hackerschool: Basic Python + Programming Crash Course {'\n'}
                        </Text>

                        <Text style = {styles.text}>
                            Date/Time: Saturday, 8th February 2020, 1:00pm - 4:00pm {'\n'}
                            Venue: COM1-SR1 {'\n'}
                            Sign-up link: https://www.facebook.com/events/789353261542631/ {'\n'}
                            Description: {'\n'}
                            A beginner crash course to programming in Python. {'\n'}
                        </Text>
                    </Hyperlink>
                 </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'beige',
    },
    textContainer: {
        marginHorizontal: 20,
        marginVertical: 20,

    },
    title: {
        textDecorationLine: 'underline',
        fontSize: 15,
        fontWeight: 'bold',
        marginHorizontal: 20,
        textAlign: 'center'
    },
    text: {
        fontSize: 14,
        textAlign: 'center'
    }
})