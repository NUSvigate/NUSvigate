import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class MapMenu extends Component {
    getItem = (name, text, size, color, type, placeType) => (
        <TouchableOpacity
            onPress = {() => {
                this.props.navigation.navigate("Map Container", {
                    locations: placeType
                });
            }}
        >
            <View style = {styles.iconStyle}>
                <Icon
                    name = {name}
                    size = {size}
                    reverse
                    color = {color}
                    type = {type}
                    raised
                />
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.iconContainer}>
                    {this.getItem('flag', 'All Markers', 60, '#eb4034', 'material',
                    'all')}

                    {this.getItem('home', 'Halls & RCs', 60, '#f50', 'font-awesome',
                     'accommodations')}

                    {this.getItem('restaurant', 'F & B', 60, '#031068', 'material',
                     'food')}

                    {this.getItem('slideshare', 'Lecture Theatres', 60, '#300423', 'font-awesome',
                     'lectures')}

                    {this.getItem('list-alt', 'Tutorial Rooms', 60, '#0B6CFB', 'font-awesome',
                     'tutorials')}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        marginTop: 40,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    iconStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5
    },
    textStyle: {
        fontSize: 18
    }
})