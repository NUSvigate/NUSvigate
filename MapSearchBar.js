import React from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Dimensions } from 'react-native';

export default class MapSearchBar extends React.Component {
    render() {
        return (
            <SearchBar
                placeholder='Search Location'
                value = {null}
                round
                platform = 'android'
                containerStyle = {styles.searchContainer}
            />
        )
    }
}

windowHeight = Dimensions.get('window').height;
windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'white',
        height: windowHeight / 20,
        width: windowWidth - 40
    }
})