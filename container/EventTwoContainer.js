import React from 'react';
import { StyleSheet, ScrollView, Text, Image, TouchableOpacity, Dimensions, View } from 'react-native';
import Lightbox from 'react-native-lightbox';

export default class EventTwoContainer extends React.Component {

    render() {
        return (
            <ScrollView style = {styles.container}>
                <View style={styles.textContainer}>
                    <Text>
                        Dear students, {'\n'} {'\n'}
                        Registrar’s Office is recruiting students to assist in their annual events
                        i.e. Commencement 2020,  Freshmen Registration and Module Registration 2020. {'\n'}
                        Please refer to the attached doc for details. {'\n'}
                        Please email to UGRegistration@nus.edu.sg if you have any queries. {'\n'} {'\n'}
                        Deadline for application: 9 Apr 2020 (Thurs) {'\n'} {'\n'}
                        Regards, {'\n'}
                        Registrar’s Office
                    </Text>
                </View>

                <Lightbox
                    swipeToDismiss
                    style={styles.imageContainer}
                >
                    <Image
                        source = {require('../assets/eventEnlarge.png')}
                        resizeMode = 'contain'
                    />
                </Lightbox>
            </ScrollView>
        )
    }
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'beige',
    },
    textContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    imageContainer: {
        marginHorizontal: 20,
        marginVertical: 20,
        backgroundColor: 'blue',
        justifyContent: 'center'
    },
    image : {
        alignItems: 'center'
    }
})